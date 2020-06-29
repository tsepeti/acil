const forever = require('forever-monitor');

// acil packages
const { getAbsoluteAppFile, getAcilJSON } = require('acil-shortcuts');

// acil.json
const { foreverOptions } = getAcilJSON();

module.exports = (file, callback) => {
  const app = new forever.Monitor(getAbsoluteAppFile(file), {
    silent: true,
    ...foreverOptions,
  });

  app.on('stderr', data => {
    return callback('error', data.toString());
  });

  app.on('exit', () => {
    return callback('exit');
  });

  return app.start();
};
