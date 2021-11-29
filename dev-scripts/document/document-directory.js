const fs = require('fs');
const path = require('path');
const util = require('util');

const jsdocToMarkdown = require('jsdoc-to-markdown');
const prettier = require('prettier');

const safeFileName = (path) =>
  path.split(path.sep).join('-').split('.').join('-').split(' ').join('-');

const documentDirectory = async (
  dirName,
  {
    title = dirName.toUpperCase(),
    fileName = safeFileName(dirName),
    ignore = [],
    maxDepth = Infinity,
    graphPrefix = title,
  }
) => {
  const SOURCE_DIR = path.normalize(path.join(__dirname, '..', '..', dirName));
  const DOCS_PATH = path.normalize(
    path.join(__dirname, '..', '..', 'docs', `${fileName}.md`)
  );

  try {
    fs.accessSync(SOURCE_DIR);
  } catch (err) {
    console.log(`--- creating ${dirName} directory ---`);
    fs.mkdirSync(SOURCE_DIR);
  }

  let newToc = '';

  let newDocs = '';

  const appendToDocs = async (absolutePath, depth = 1) => {
    if (depth > maxDepth) {
      return;
    }

    try {
      const indent = new Array(depth).join('  ');
      const headerLevel = new Array(depth).join('#');
      const paths = await util.promisify(fs.readdir)(absolutePath, 'utf-8');
      paths.sort((prev, next) => {
        const absPrev = path.join(absolutePath, prev);
        const prevIsDir = fs.statSync(absPrev).isDirectory();

        const absNext = path.join(absolutePath, next);
        const nextIsDir = fs.statSync(absNext).isDirectory();

        if (prevIsDir && !nextIsDir) {
          return -1;
        }
        if (!prevIsDir && nextIsDir) {
          return 1;
        }
        return 0;
      });

      for (const nextPath of paths) {
        if (
          /.spec./i.test(nextPath) ||
          /.test./i.test(nextPath) ||
          /sandbox.js/i.test(nextPath) ||
          /node_modules/i.test(nextPath) ||
          /.git/i.test(nextPath) ||
          ignore.some((toIgnore) => new RegExp(toIgnore, 'i').test(nextPath))
        ) {
          continue;
        }

        const subPath = path.normalize(path.join(absolutePath, nextPath));

        const isDirectory = fs.statSync(subPath).isDirectory();
        if (isDirectory) {
          newToc += `\n${indent}- ${nextPath}`;

          // const readmePath = path.join(subPath, 'README.md');
          // const hasReadme =
          //   fs.existsSync(readmePath) &&
          //   fs.statSync(readmePath).isFile() &&
          //   path.extname(readmePath) === '.md';
          // if (hasReadme) {
          //   const readmeSrc = fs.readFileSync(readmePath);
          //   newDocs += `\n\n---\n\n${readmeSrc}`;
          // } else {
          // newDocs += `\n\n---\n\n${headerLevel}# /${nextPath}`;
          // }

          newDocs += `\n\n${headerLevel}# /${nextPath}`;

          await appendToDocs(subPath, depth + 1);

          // newDocs += `\n\n---\n\n[TOP](#${title.split(' ').join('-')})\n\n`;
          newDocs += `\n\n---\n\n`;

          continue;
        }

        const isNotJavaScript = path.extname(subPath) !== '.js';
        if (isNotJavaScript) {
          continue;
        }

        const isSpecOrTestFile =
          /.spec./i.test(path) ||
          /.test./i.test(path) ||
          /sandbox.js/i.test(path);
        if (isSpecOrTestFile) {
          continue;
        }

        const relativePath = subPath.replace(path.join(process.cwd()), '..');

        const anchorId = relativePath
          .split(' ')
          .join('')
          .split('.')
          .join('')
          .split('/')
          .join('');

        newToc += `\n${indent}- [${nextPath}](#${anchorId})`;

        const docs = jsdocToMarkdown.renderSync({
          files: subPath,
          exampleLang: 'js',
        });

        const kindlessDocs = docs.replace(/\*\*Kind[^\n]+/g, '\n');
        console.log(relativePath);
        newDocs +=
          // '\n\n---\n\n' +
          `${
            '\n\n' +
            `<details><summary><a href="../${relativePath}" id="${anchorId}">${relativePath}</a></summary>\n\n`
          }${kindlessDocs}</details>`;
      }
    } catch (err) {
      console.error(err);
    }
  };

  await appendToDocs(SOURCE_DIR);

  let oldReadme = '';
  if (fs.existsSync(DOCS_PATH)) {
    oldReadme = await util.promisify(fs.readFile)(DOCS_PATH, 'utf-8');
  }

  const tocRegex =
    /(<!--[ \t]*BEGIN TOC[ \t]*-->)([\s\S]*)(<!--[ \t]*END TOC[ \t]*-->)/;
  const tocReplacer = `<!-- BEGIN TOC -->${newToc}\n\n---\n\n<!-- END TOC -->`;
  const tocedReadme = oldReadme.match(tocRegex)
    ? oldReadme.replace(tocRegex, tocReplacer)
    : `${tocReplacer}\n\n---\n\n${oldReadme}`;

  const treeRegex =
    /(<!--[ \t]*BEGIN TREE[ \t]*-->)([\s\S]*)(<!--[ \t]*END TREE[ \t]*-->)/;
  // > [interactive graph](./${fileName}-dependency-graph.html)\n\n
  const treeReplacer = `<!-- BEGIN TREE -->\n\n![dependency graph](./${graphPrefix.toLowerCase()}.svg)\n\n<!-- END TREE -->`;
  const treedReadme = tocedReadme.match(treeRegex)
    ? tocedReadme.replace(treeRegex, treeReplacer)
    : `${treeReplacer}\n\n${tocedReadme}`;

  const titleRegex =
    /(<!--[ \t]*BEGIN title[ \t]*-->)([\s\S]*)(<!--[ \t]*END title[ \t]*-->)/;
  const titleReplacer = `<!-- BEGIN title -->\n# ${title}\n\n<!-- END title -->`;
  const titledReadme = treedReadme.match(titleRegex)
    ? treedReadme.replace(titleRegex, titleReplacer)
    : `${titleReplacer}\n\n${treedReadme}`;

  const docsRegex =
    /(<!--[ \t]*BEGIN DOCS[ \t]*-->)([\s\S]*)(<!--[ \t]*END DOCS[ \t]*-->)/;
  const docsReplacer = `<!-- BEGIN DOCS -->${newDocs}\n\n<!-- END DOCS -->`;
  const newDocsDocument = titledReadme.match(docsRegex)
    ? titledReadme.replace(docsRegex, docsReplacer)
    : `${titledReadme}\n\n${docsReplacer}`;

  let formattedDocs = newDocsDocument;
  try {
    formattedDocs = prettier.format(formattedDocs, {
      parser: 'markdown',
    });
  } catch (o_0) {
    console.error(o_0);
  }

  fs.writeFile(
    DOCS_PATH,
    formattedDocs,
    'utf-8',
    (err) => err && console.error(err)
  );
};

module.exports = documentDirectory;
