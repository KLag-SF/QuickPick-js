<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <h3>QuickPick.js</h3>
    </v-app-bar>

    <v-main>
      <selector-component @selected="setPickedNumber"/>
      <result-component :picked="picked"/>
    </v-main>
  </v-app>
</template>

<script>

import SelectorComponent from './components/SelectorComponent';
import ResultComponent from "@/components/ResultComponent";

export default {
  name: 'App',

  components: {
    SelectorComponent,
    ResultComponent,
  },

  data: () => ({
    picked: [],
  }),

  methods:{
    setPickedNumber: function(picked){
      this.picked = picked
    }
  }
};
</script>
