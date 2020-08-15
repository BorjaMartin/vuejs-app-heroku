<template>
  <div class="container" id="tabs">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Entrenadores" active>
          <ResultCustomer></ResultCustomer>
        </b-tab>
        <b-tab title="Valoración del conjunto">
          <SatisfactionCustomer></SatisfactionCustomer>
        </b-tab>
      </b-tabs>
    </b-card>
   
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
  
  
};
</script>

<style>
</style>