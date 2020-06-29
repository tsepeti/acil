const forever = require('forever-monitor');

// acil packages
const {
  getAbsoluteAppFile,
  getAcilJSON,
  getBabelNodePath,
} = require('acil-shortcuts');

// acil.json
const { foreverOptions } = getAcilJSON();

module.exports = (file, callback) => {
  const app = new forever.Monitor(getAbsoluteAppFile(file), {
    silent: true,
    command: getBabelNodePath(),
    ...foreverOptions,
  });

  app.on('stderr', data => {
    return callback('error', data.toString());
  });

  app.on('stdout', data => {
    console.log(data.toString());
  });

  app.on('exit', () => {
    return callback('exit');
  });

  return app.start();
};
