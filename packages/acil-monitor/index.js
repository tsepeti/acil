const forever = require('forever-monitor');

// acil packages
const { getAbsoluteAppFile } = require('acil-shortcuts');

module.exports = (file, callback) => {
  const app = new forever.Monitor(getAbsoluteAppFile(file), {
    silent: true
  });

  app.on('stderr', (data) => {
    return callback('error', data.toString());
  });

  app.on('exit', () => {
    return callback('exit')
  });

  return app.start();
};
