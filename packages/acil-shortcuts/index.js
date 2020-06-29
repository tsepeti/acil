const fs = require('fs');
const path = require('path');

// env variables
const { NODE_ENV, SENDGRID_API_KEY } = process.env;

// Application is production boolean
const isProduction = NODE_ENV === 'production';

const ACIL_JSON = {
  name: 'Application',
  admins: [],
  from: 'Company <company@gmail.com>',
  sendGridApiKey: SENDGRID_API_KEY,

  // forever options
  foreverOptions: {},
};

const getMjml = (dir, name) => {
  const file = path.join(dir, `./templates/${name}.mjml`);

  return fs.readFileSync(file, 'utf8');
};

const getAcilJSON = () => {
  const file = path.resolve('acil.json');

  if (fs.existsSync(file)) {
    const options = require(file);

    return {
      ...ACIL_JSON,
      ...options,
    };
  }

  // Default options mail object
  return ACIL_JSON;
};

const getAbsoluteAppFile = name => {
  return path.resolve(name);
};

// run babel-node es6 scripts.
const getBabelNodePath = () => {
  const nm = 'node_modules';
  return `${nm}/.bin/babel-node`;
};

const isErrorType = type => {
  return type == 'error';
};

const isExitType = type => {
  return type == 'exit';
};

module.exports = {
  // Functions
  getMjml,
  getAcilJSON,
  getAbsoluteAppFile,
  getBabelNodePath,
  isErrorType,
  isExitType,

  // Booleans
  isProduction,
};
