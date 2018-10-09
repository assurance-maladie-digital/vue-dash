const clear = require('clear');
clear();

import header from '../src/helper/header';
header();

import spinner from '../src/helper/spinner';
const spin = spinner('Building library…');
spin.start();

import chalk, { log, xLog } from '../src/helper/chalk';

const cmd = require('node-cmd');
const fs = require('extfs');
const fse = require('fs-extra');
const path = require('path');

// src('src/dist') -> @root'/src/dist'
const src = (pathValue: string): string => path.join(__dirname, '..', pathValue);

const dist = src('dist');

const showStats = () => {
	const getSize = require('get-folder-size');
	process.stdout.write('\n');

	getSize(dist, (error: Error, size: number) => {
		if (error) {
			xLog(`Error: ${error}`, 'error');
		}

		log(chalk.blue(`Library size: ${(size / 1024).toFixed(2)} KB`));
		process.stdout.write('\n');
	});
};

// Remove 'dist' directory if content inside
if (!fs.isEmptySync(dist)) {
	fs.removeSync(dist);
}

// Copy template folder
fse.copy(
	src('src/template'),
	src('dist/template'),
	(error: Error) => {
		if (error) {
			log(chalk.red(`Error: ${error}`));
		}
	}
);

cmd.get('tsc', (error: Error) => {
	spin.stop();

	if (error) {
		log(chalk.red(`Error: ${error}`));
	} else {
		log(chalk.white.bold(`🎉  Successfully build VueDash`));
		showStats();
	}
});
