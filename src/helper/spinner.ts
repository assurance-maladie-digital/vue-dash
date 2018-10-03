const clui = require('clui');
import chalk from './chalk';

const SpinnerFactory = clui.Spinner;

const spinner = (text: string) => {
	return new SpinnerFactory(chalk.white.bold(text), [
		'⣾',
		'⣽',
		'⣻',
		'⢿',
		'⡿',
		'⣟',
		'⣯',
		'⣷'
	]);
};

export default spinner;
