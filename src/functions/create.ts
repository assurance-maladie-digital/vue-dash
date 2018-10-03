import fs from 'extfs';
import copy from 'recursive-copy';
import inquirer from 'inquirer';
import cmd from 'node-cmd';

import Argv from '@/interfaces/argv';

import emptyDir from './emptyDir';

interface Answers {
	overwrite: string;
}

const options = {
	dot: true
};

const questions = [
	{
		type: 'list',
		name: 'overwrite',
		message: 'overwrite the content of the current folder',
		choices: [
			'Yes',
			'No'
		]
	}
];

const copyToDest = (argv: Argv, dest: string) => {
	copy('../template', dest, options)
	.then((results: any[]) => {
		if (argv.verbose) {
			// console.info(`Copied ${results.length} files`);
		}

		if (argv.verbose) {
			// console.info('Run `yarn` command');
		}

		cmd.run('yarn');
	})
	.catch((error: Error) => {
		// console.error(`Copy failed: ${error}`);
	});
};

const create = (argv: Argv) => {
	const dest = process.cwd();

	if (argv.verbose) {
		// console.info('Copy of template');
		// console.info(`Destination folder: ${dest}`);
		// console.info(`Directory empty: ${fs.isEmptySync(dest)}`);
	}

	if (!fs.isEmptySync(dest)) {
		if (argv.verbose) {
			// console.info('Ask if user wants to overwrite directory content');
		}

		inquirer
		.prompt(questions)
		.then((answers: Answers) => {
			if (argv.verbose) {
				// console.info(`User answer: ${answers.overwrite}`);
			}

			if (answers.overwrite === 'Yes') {
				emptyDir(dest);
				copyToDest(argv, dest);
			} else {
				if (argv.verbose) {
					// console.info('Ending program');
				}

				process.exit();
			}
		})
		.catch((error: Error) => {
			// console.error(error);
		});
	} else {
		copyToDest(argv, dest);
	}
};

export default create;
