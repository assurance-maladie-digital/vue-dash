import chalk, { colors, log } from './chalk';
import * as figlet from 'figlet';

// display 'VueDash' with 'Georgia11' font, and 'primay' color
const header = log(
	chalk.hex(colors.primary)
	(figlet.textSync('VueDash', {
		font: 'Georgia11',
		horizontalLayout: 'default',
		verticalLayout: 'default'
	})
));

export default header;
