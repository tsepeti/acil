const fs = require('fs');
const path = require('path');

const getMjml = (dir, name) => {
  const file = path.join(dir, `./templates/${name}.mjml`);

  return fs.readFileSync(file, 'utf8');
}

module.exports = {
  getMjml
}