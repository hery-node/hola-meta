import Vue from 'vue';

import NavBar from './NavBar.vue';

function setup_my_components() {
    Vue.component('h-navbar-custom', NavBar);
}

export { setup_my_components };