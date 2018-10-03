import Vue from 'vue';
import VueI18n from 'vue-i18n';
import axios from '@/api';

Vue.use(VueI18n);

// Get default language from previously selected, or from the browser, or fallback to French
const defaultLang = window.localStorage.getItem('lang') || navigator.language.substr(0, 2) || 'fr';

const i18n = new VueI18n({
	locale: defaultLang,
	fallbackLocale: 'fr', // By default, fallback to French if translation isn't found
	silentTranslationWarn: true // Remove warnings from the console, as suggested by the author of vue-i18n
});

const loadedLanguages: string[] = [];

// Set the language everywhere in the app where it needs to be
// This means i18n locale, axios headers, localstorage and html lang attribute
function setI18nLanguage(lang: string): string {
	i18n.locale = lang;
	axios.defaults.headers.common['Accept-Language'] = lang;
	window.localStorage.setItem('lang', lang);

	const html: any = document.querySelector('html');
	html.setAttribute('lang', lang);
	return lang;
}

// The function to use to change language, which loads the traduction file if needed with webpack dynamic import
export function loadLanguageAsync(lang: string): any {
	if (!loadedLanguages.includes(lang)) {
		return import(/* webpackChunkName: "translations-[request]" */ `@/translations/${lang}`).then((messages) => {
			i18n.setLocaleMessage(lang, messages.default);
			loadedLanguages.push(lang);
			return setI18nLanguage(lang);
		});
	}

	return Promise.resolve(setI18nLanguage(lang));
}

// Load default language
loadLanguageAsync(defaultLang);

export default i18n;
