<template>
  <v-container>
    <!--h3>{{type.choices}}</h3-->
    <v-row align="center">
      
      <v-col class="d-flex" cols="4" sm="2">
        <v-select
          :items="types"
          label="投票形式"
          item-text="label"
          v-model="type"
          return-object
        />
      </v-col>

      <v-col cols="3" md="1">
        <v-select
          :items="max_opt"
          label="出走数"
          v-model="max"
        />
      </v-col>

      <v-col class="d-flex" cols="1">
        <i class="fa-solid fa-arrow-right center" ></i>
      </v-col>

      <v-col class="d-flex" cols="1">
        <v-btn
          large
          elevation="3"
          color="primary"
          @click="send"
        >
          Go!
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MainComponent',

  data: () => ({
    type: {},
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
      //{label: "WIN5", choices: 5, multi: false},
    ] ,
    max_opt: [],
    max: 0,
    picked: [],
  }),

  methods:{
    randomPick: function (){
      let ls_val = []
      for (let i = 1; i <= this.max; i++){
        ls_val.push(i)
      }

      let i = ls_val.length - 1
      while(i > 0){
        let j = Math.floor(Math.random() * i )
        let k = ls_val[i]
        ls_val[i] = ls_val[j]
        ls_val[j] = k
        i = i - 1
      }

      this.picked = ls_val.slice(0, this.type.choices)
    },

    send: function(){
      this.randomPick()
      this.$emit("selected", this.picked)
    }
  },

  created() {
    for (let i = 1; i <= 18; i++){
        this.max_opt.push(i)
    }
  }
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
