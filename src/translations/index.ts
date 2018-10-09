import * as yargs from 'yargs';
import * as objectPath from 'object-path';

const supportedLanguages = [
	'en',
	'fr'
];

// always import de
import en from '@/translations/en';

// current lang used (format 'xx')
const os = yargs.locale().substring(0, 2);

// use language if supported, else use English
const locale = supportedLanguages.includes(os) ? os : 'en';

// load translation file if not en (already loaded)
let data: object;

if (locale !== 'en') {
	// tslint:disable-next-line:no-var-requires
	data = require(`@/translations/${locale}`).default;
}

const trad = (path: string) => {
	const translation = objectPath.get(data, path);

	// return translation in current language, or in English
	return translation && locale !== 'en' ? translation : objectPath.get(en, path);
};

export default trad;
