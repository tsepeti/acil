const forever = require('forever-monitor');

// acil packages
const { getAcilJSON } = require('acil-shortcuts');

module.exports = callback => {
  const { script } = getAcilJSON();

  const app = new forever.Monitor(script, {
    silent: true,
  });

  app.on('stderr', callback);

  return app.start();
};
