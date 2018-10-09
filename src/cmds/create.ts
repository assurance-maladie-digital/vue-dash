const clear = require('clear');
clear();

import header from '@/helper/header';
header();

import { xLog } from '@/helper/chalk';

import Argv from '@/interfaces/argv';

import create from '@/functions/create';
import trad from '@/translations';

exports.command = 'create [name]';
exports.desc = trad('cmds.create.description');

exports.builder = {
	name: {
		type: 'string',
		default: 'vue-template',
		description: trad('cmds.create.name.description')
	}
};

exports.handler = (argv: Argv) => {
	if (argv.verbose) {
		xLog(`Create app '${argv.name}'`, 'verbose');
	}

	create(argv);
};
