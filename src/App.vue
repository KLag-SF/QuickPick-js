<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <h3>QuickPicker</h3>
    </v-app-bar>

    <v-main>
      <main-component/>
    </v-main>
  </v-app>
</template>

<script>

import MainComponent from './components/MainComponent';

export default {
  name: 'App',

  components: {
    MainComponent,
  },

  data: () => ({
    //
  }),
};
</script>
