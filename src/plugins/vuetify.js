import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes:{
            light:{
                primary: colors.green.darken1,
                // Color of each blackets
                blacket1: colors.shades.white,
                blacket2: colors.shades.black,
                blacket3: colors.red.darken2,
                blacket4: colors.blue.darken2,
                blacket5: colors.yellow.accent2,
                blacket6: colors.lightGreen.accent3,
                blacket7: colors.yellow.darken4,
                blacket8: colors.pink.lighten4,
            }
        }
    }
});
