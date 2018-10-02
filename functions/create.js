const fs = require('extfs');
const copy = require('recursive-copy');
const inquirer = require('inquirer');
const cmd = require('node-cmd');

const emptyDir = require('./emptyDir');

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

const copyToDest = (argv, dest) => {
	copy('../template', dest, options)
		.then((results) => {
			if (argv.verbose) {
				console.info(`Copied ${results.length} files`);
			}

			if (argv.verbose) {
				console.info('Run `yarn` command');
			}
		
			cmd.run('yarn');
		})
		.catch((error) => console.error(`Copy failed: ${error}`));
};

module.exports = (argv) => {
	const dest = process.cwd();

	if (argv.verbose) {
		console.info('Copy of template');
		console.info(`Destination folder: ${dest}`);
		console.info(`Directory empty: ${fs.isEmptySync(dest)}`);
	}

	if (!fs.isEmptySync(dest)) {
		if (argv.verbose) {
			console.info('Ask if user wants to overwrite directory content');
		}

		inquirer
			.prompt(questions)
			.then(answers => {
				if (argv.verbose) {
					console.info(`User answer: ${answers.overwrite}`);
				}

				if (answers.overwrite === 'Yes') {
					emptyDir(dest);
					copyToDest(argv, dest);
				} else {
					if (argv.verbose) {
						console.info('Ending program');
					}

					process.exit()
				}
			})
			.catch(e => console.error(e));
	} else {
		copyToDest(argv, dest);
	}
};
