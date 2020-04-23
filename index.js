const forever = require('forever-monitor');
const sgMail = require('@sendgrid/mail');

module.exports = (options) => {
	const { company, email, admins, file, sendGridApiKey } = options;

	// set sendgrid
	sgMail.setApiKey(sendGridApiKey);

	const app = new forever.Monitor(file, {
		silent: true
	});

	// is error then handle
	app.on('stderr', (data) => {
		sgMail.send({
			to: admins,
			from: `${company} <${email}>`,
			subject: 'Error',
			html: `
        <div>
          <h3>ERROR</h3>
          <div>
            ${data.toString()}
          </div>
        </div>
      `
		});
	});

	return app.start();
};