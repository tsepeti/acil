const Mjml = require('mjml');
const Mustache = require('mustache');
const Mail = require('@sendgrid/mail');

// acil packages
const { getMjml, getAcilJSON, isProduction } = require('acil-shortcuts');

const MJML_OPTIONS = {};

// sendsendGridApiKey
const { admins, from, sendGridApiKey } = getAcilJSON();

// initialize sendgrid Mail
Mail.setApiKey(sendGridApiKey);

module.exports = (type, log) => {
  const output = Mjml(getMjml(__dirname, type), MJML_OPTIONS);
  const html = Mustache.render(output.html, {
    type,
    log,
  });

  const sendData = {
    to: admins,
    from: from,
    subject: `Acil - ${type}`,
    html,
  };

  if (isProduction) {
    return Mail.send(sendData).then(() => {

      // sended email
      return console.log('Error email has been sent.');
    })
  }

  return console.log(log);
};
