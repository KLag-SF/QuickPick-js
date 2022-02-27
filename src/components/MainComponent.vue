<template>
  <v-container class="d-flex flex-column">
    <h3>{{choices}}</h3>
    <v-row align="center">
        <v-col class="d-flex" cols="3">
        <v-select
          :items="types"
          label="投票形式"
          item-text="label"
          v-model="choices"
          return-object
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MainComponent',
  props: {
    msg: String
  },
  data: () => ({
    choices: 0,
    types: [
      {label: "単勝", choices: 1, multi: false},
      {label: "複勝", choices: 1, multi: false},
      {label: "馬単", choices: 2, multi: false},
      {label: "馬連", choices: 2, multi: true},
      {label: "ワイド", choices: 2, multi: false},
      {label: "三連単", choices: 3, multi: true},
      {label: "三連複", choices: 3, multi: false},
      {label: "枠連", choices: 2, multi: false},
      {label: "枠単", choices: 2, multi: true},
    ] ,
    methods:{
    }
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
