const Mjml = require('mjml');
const Mustache = require('mustache');

// acil packages
const { getMjml } = require('acil-shortcuts');

const MJML_OPTIONS = {};

module.exports = {
  get(name, context) {
    const output = Mjml(getMjml(__dirname, name), MJML_OPTIONS);

    return Mustache.render(output.html, context);
  },
};
