import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import errors from './errors';

// The store is saved in the browser's session
const vuexLocal = new VuexPersistence({
	storage: window.sessionStorage
});

Vue.use(Vuex);

// See https://vuex.vuejs.org/fr/getting-started.html for help
const store = new Vuex.Store({
	modules: {
		errors
	},
	plugins: [
		vuexLocal.plugin
	]
});

export default store;
