const Monitor = require('acil-monitor');
const Emails = require('acil-emails');

// shortcuts
const { isProduction } = require('acil-shortcuts');

// XXX: is production then running Acil!!.
if (isProduction) {
  Monitor(data => {
    const { send } = Emails();

    return send(data);
  });
}
