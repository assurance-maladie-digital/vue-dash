import Vue from 'vue';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

import config from '@/config';

Raven
	.config(config.sentry.url)
	.addPlugin(RavenVue, Vue)
	.install();
