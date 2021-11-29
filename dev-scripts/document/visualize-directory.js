const fs = require('fs');
const path = require('path');

const { cruise } = require('dependency-cruiser');
const { renderGraphFromSource } = require('graphviz-cli');

const safeFileName = (fileName) =>
  fileName.split(path.sep).join('-').split('.').join('-').split(' ').join('-');

const visualizeDirectory = async (
  dirName,
  {
    options = {
      outputType: 'dot',
      doNotFollow: { path: 'node_modules' },
      reporterOptions: {
        dot: { collapsePattern: '^(node_modules/[^/]+)' },
      },
      exclude: '(sandbox.js|(\\S)+.spec.js|dev-scripts|dev.js)',
    },
    filePrefix = safeFileName(dirName),
  }
) => {
  const SOURCE_DIR = path.normalize(path.join(__dirname, '..', '..', dirName));
  const GRAPH_PATH = path.normalize(
    path.join(__dirname, '..', '..', 'docs', filePrefix)
  );

  try {
    fs.accessSync(SOURCE_DIR);
  } catch (err) {
    console.log(`--- creating ${dirName} directory ---`);
    fs.mkdirSync(SOURCE_DIR);
  }

  const cruised = cruise([SOURCE_DIR], options).output;

  // for (const project of cruised) {

  renderGraphFromSource({ input: cruised }, { format: 'svg' })
    .then((svgGraph) =>
      fs.writeFile(
        path.join(`${GRAPH_PATH}.svg`),
        svgGraph,
        'utf-8',
        (err) => err && console.err(err)
      )
    )
    .catch((err) => console.error(err));

  // // depcruise-wrap-stream-in-html is only available as CLI option
  // renderGraphFromSource({ input: cruised }, { format: 'html' })
  //   .then(htmlGraph =>
  //     fs.writeFile(
  //       path.join(GRAPH_PATH + '.html'),
  //       htmlGraph,
  //       'utf-8',
  //       err => err && console.err(err)
  //     )
  //   )
  //   .catch(err => console.error(err));
  // }
};

module.exports = visualizeDirectory;
