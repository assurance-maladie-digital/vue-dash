import Vue from 'vue';

// Import global vuetify components here
import {
	Vuetify,
	VApp,
	VGrid,
	transitions
} from 'vuetify';

import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
	components: {
		VApp,
		VGrid,
		transitions
	}
});
