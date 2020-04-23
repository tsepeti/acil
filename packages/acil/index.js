const Monitor = require('acil-monitor');
const Emails = require('acil-emails');

module.exports = () => {
  const { send } = Emails();

  return Monitor((data) => {
    return send(data);
  })
};
