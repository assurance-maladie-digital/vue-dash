import chalk from 'chalk';
import colors from '../theme';

// tslint:disable-next-line:no-console
const log = console.log;

const xLog = (text: string, type: string) => {
	switch (type) {
		case 'verbose':
			log(chalk.bold.hex('#909090')(('• ' + text)));
			break;

		case 'event':
			log(chalk.bold.white(text));
			break;

		case 'error':
			log(chalk.red(`Error: ${text}`));
			break;

		default:
			log(text);
			break;
	}
};

export {
	colors,
	log,
	xLog
};
export default chalk;
