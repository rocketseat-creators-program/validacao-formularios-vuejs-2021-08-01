import Vue from 'vue';
import {
	ValidationProvider,
	ValidationObserver,
	setInteractionMode,
} from 'vee-validate';

import App from './App.vue';

import './tailwind.css';
import './vee-validate';

Vue.config.productionTip = false;

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

setInteractionMode('eager'); // aggressive, lazy, passive or eager

new Vue({
	render: (h) => h(App),
}).$mount('#app');
