const Mjml = require('mjml');
const Mustache = require('mustache');
const Mail = require('@sendgrid/mail');

// acil packages
const { getMjml, getAcilJSON } = require('acil-shortcuts');

const MJML_OPTIONS = {};

module.exports = apiKey => {
  // initialize sendgrid Mail
  Mail.setApiKey(apiKey);

  return {
    get(name, context) {
      const output = Mjml(getMjml(__dirname, name), MJML_OPTIONS);

      return Mustache.render(output.html, context);
    },

    send() {
      const { admins, from } = getAcilJSON();

      console.log({
        to: admins,
        from: from,
        subject: 'Acil ERROR',
        html: this.get('500', {}),
      });
    },
  };
};
