import Vue from "vue";
import Vuetify from 'vuetify';
import colors from 'vuetify/lib/util/colors'
import VuetifyConfirm from 'vuetify-confirm';
import { setup_components } from "hola-web";
// Vuetify's CSS styles 
import "vuetify/dist/vuetify.min.css";

setup_components();
Vue.use(Vuetify);

const vuetify = new Vuetify();
Vue.use(VuetifyConfirm, { vuetify });

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.cyan.darken2,
                progress: colors.red.darken2,
                tag: colors.red.darken1,
                secondary: colors.cyan.darken1,
                tertiary: '#495057',
                accent: '#82B1FF',
                error: colors.red.darken1,
                info: '#00d3ee',
                success: colors.cyan.darken1,
                create: colors.cyan.darken1,
                edit: colors.cyan.darken1,
                clone: colors.cyan.darken1,
                delete: colors.red.darken1,
                refresh: colors.green.darken1,
                warning: '#ffa21a',
                chart: colors.cyan.darken1,
                chart_title: colors.red.darken4,
                app_bar: colors.cyan.darken2,
                system_bar: '#FFFFFF',
                table_header: colors.cyan.lighten4,
                toolbar_icon: '#FFFFFF',
                chip: colors.cyan.darken1,
                bgcolor: colors.grey.lighten4,
                card: colors.cyan.darken1,
                back: colors.red.darken4,
                title_button: '#FFFFFF'
            }
        },
    },
});
