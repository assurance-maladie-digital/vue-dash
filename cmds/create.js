const create = require('../functions/create');

exports.command = 'create [name]';
exports.desc = 'Create the application';

exports.builder = {
	name: {
		default: 'vue-template',
		description: 'name of the app'
	}
};

exports.handler = (argv) => {
	if (argv.verbose) {
		console.info(`Create app with name: ${argv.name}`);
	}

	create(argv);
};
