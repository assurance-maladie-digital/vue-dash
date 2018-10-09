import * as path from 'path';
import * as fs from 'extfs';
import * as copy from 'recursive-copy';
import * as inquirer from 'inquirer';

import Argv from '@/interfaces/argv';
import trad from '@/translations';

import chalk, { colors, log, xLog } from '@/helper/chalk';

interface Answers {
	overwrite: string;
}

const options = {
	dot: true
};

const src = (pathValue: string): string => path.join(__dirname, `${pathValue}`);

const questions = (argv: Argv) => {
	return [
		{
			type: 'list',
			name: 'overwrite',
			message: chalk.bold(`Target directory ` + chalk.cyan(src(argv.name)) + ' already exists. Pick an action:'),
			choices: [
				{
					name: trad('functions.create.question.choices.overwrite'),
					value: true
				},
				{
					name: trad('functions.create.question.choices.cancel'),
					value: false
				}
			]
		}
	];
};

const copyToDest = (argv: Argv, dest: string) => {
	copy(src('../template'), dest, options)
	.then((results: any[]) => {
		if (argv.verbose) {
			xLog(`📋 Copied ${results.length} files`, 'event');
		}

		process.stdout.write('\n');
		process.chdir(argv.name);


		const { spawn } = require('child_process');
		const child = spawn('yarn', { stdio: 'inherit' });

		child.on('exit', () => {
			process.stdout.write('\n');
			log(chalk.white.bold(`🎉 Successfully created application ${chalk.cyan(argv.name)}`));
		});
	})
	.catch((error: Error) => {
		xLog(`Error: ${error}`, 'error');
	});
};

const create = (argv: Argv) => {
	const dest = argv.name;

	if (argv.verbose) {
		xLog(
			`Copy 'template' to ${chalk.hex('#d0d0d0')(src(dest))}`,
			'verbose'
		);

		xLog(
			`Target directory empty: ${fs.isEmptySync(dest)}`,
			'verbose'
		);
	}


	const version = require(`@root/package.json`).version;
	log(chalk.bold.hex(colors.primary)(`🛰️  VueDash v${version}`));

	process.stdout.write('\n');
	log(chalk.white.bold(`🚧 Creating application…`));
	process.stdout.write('\n');

	if (!fs.isEmptySync(dest)) {
		if (argv.verbose) {
			xLog('Ask user to pick an action', 'verbose');
			process.stdout.write('\n');
		}

		inquirer
		.prompt(questions(argv))
		.then((answers: Answers) => {
			if (argv.verbose) {
				process.stdout.write('\n');
				xLog(`User answer: ${answers.overwrite}`, 'verbose');
				process.stdout.write('\n');
			}

			if (answers.overwrite) {
				fs.removeSync(dest);

				copyToDest(argv, dest);
			} else {
				if (argv.verbose) {
					xLog(chalk.hex('#d0d0d0')('Ending program'), '');
				}

				process.exit();
			}
		})
		.catch((error: Error) => {
			xLog(`Error: ${error}`, 'error');
		});
	} else {
		copyToDest(argv, dest);
	}
};

export default create;
