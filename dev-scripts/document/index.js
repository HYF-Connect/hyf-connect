const documentDirectory = require('./document-directory');
const visualizeDirectory = require('./visualize-directory');

for (const dirName of process.argv.slice(2)) {
  documentDirectory(dirName, {}).catch((err) => console.error(err));
  visualizeDirectory(dirName, {}).catch((err) => console.error(err));
}
