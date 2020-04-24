const Mjml = require('mjml');
const Mustache = require('mustache');
const Mail = require('@sendgrid/mail');

// acil packages
const { getMjml, getAcilJSON } = require('acil-shortcuts');

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

  return Mail.send({
    to: admins,
    from: from,
    subject: `Acil - ${type}`,
    html,
  }).then(() => {

    // sended email
    return console.log('Error email has been sent.');
  })
};
