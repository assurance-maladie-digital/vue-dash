const clear = require('clear');
clear();

import header from '@/helper/header';
header();

import chalk, { colors, log, xLog } from '@/helper/chalk';

log(chalk.white.bold(`⚙️  Serving application…`));
process.stdout.write('\n');

import trad from '@/translations';

exports.command = 'serve';
exports.desc = trad('cmds.serve.description');

exports.builder = {
	open: {
		type: 'boolean',
		description: trad('cmds.serve.open.description')
	}
};

exports.handler = () => {
	const { spawn } = require('child_process');
	const child = spawn('yarn', ['serve'], { stdio: 'inherit' });
};
