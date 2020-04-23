const fs = require('fs');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

const getMjml = (dir, name) => {
  const file = path.join(dir, `./templates/${name}.mjml`);

  return fs.readFileSync(file, 'utf8');
};

const getAcilJSON = (dir, name) => {
  return {
    script: './app.js',
    admins: ['test1@gmail.com', 'test2@gmail.com'],
    from: 'Company <company@gmail.com>',
  };
};

module.exports = {
  // Functions
  getMjml,
  getAcilJSON,

  // Booleans
  isProduction,
};
