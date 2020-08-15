<template>
  <div class="container" id="tabs">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Entrenadores" active>
          <ResultCustomer></ResultCustomer>
        </b-tab>
        <b-tab title="Valoración del conjunto">
          <SatisfactionCustomer></SatisfactionCustomer>
          <!--  
           <div>
              <b-table hover :fields="fields" :items="customers"></b-table>
           </div>
           -->
        </b-tab>
      </b-tabs>
    </b-card>
     <b-button
              v-on:click="goBack"
              variant="secondary"
              class="btn ml-2 mt-2 float-right"
            >Volver</b-button>
  </div>
  
</template>

<script>

import ResultCustomer from "./ResultCustomer";
import SatisfactionCustomer from "./SatisfactionCustomer";


export default {
  name: "ResultTab",
  components: {
    ResultCustomer,
    SatisfactionCustomer,
  },
  
  data() {
    return {
      
    }
  },
  methods:{
    goBack() {
       this.$router.push("/");
    },

  }
  
};
</script>

<style>
</style>