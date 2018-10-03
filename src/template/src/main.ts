import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import './plugins/sentry';
import './filters/';
import '@cnamts/vue-dot';
import App from './App.vue';
import router from './router';
import store from './store/';
import VueConfig from 'vue-config';
import './registerServiceWorker';
import i18n from './i18n';

import config from '@/config/';

Vue.use(VueConfig, config);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	i18n,
	render: (h) => h(App)
}).$mount('#app');
