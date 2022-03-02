import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes:{
            light:{
                primary: colors.green.darken1,
                // Color of each brackets
                bracket1: colors.shades.white,
                bracket2: colors.shades.black,
                bracket3: colors.red.darken2,
                bracket4: colors.blue.darken2,
                bracket5: colors.yellow.accent2,
                bracket6: colors.lightGreen.accent3,
                bracket7: colors.yellow.darken4,
                bracket8: colors.pink.lighten4,
            }
        }
    }
});
