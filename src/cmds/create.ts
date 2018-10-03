import Argv from '@/interfaces/argv';

import create from '@/functions/create';

exports.command = 'create [name]';
exports.desc = '🎉  Create and configure the application';

exports.builder = {
	name: {
		default: 'vue-template',
		description: 'Name of the application'
	}
};

exports.handler = (argv: Argv) => {
	if (argv.verbose) {
		// console.info(`Create app with name: ${argv.name}`);
	}

	create(argv);
};
