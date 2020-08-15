<template>
  <div>
    <b-table hover :fields="fields" :items="customers"></b-table>
  </div>
</template>

<script>

import CustomersModel from "../../backend/models/customer.js";


export default {
  name: "SatisfactionCustomer",
  components: {},
  mounted() {
    this.getAssignCustomers();
  },
  data() {
    return {
      customers: [],
      CustomersStatic: CustomersModel,
      fields: [
        {
          key: "name",
          label: "Nombre del Cliente",
          sortable: false,
        },
        {
          key: "reputationImport",
          label: "Importancia de la reputación del entrenador",
          sortable: true,
        },
        {
          key: "satisfaction",
          label: "Satisfacción del cliente (%)",
          sortable: true,
        },

      ],
    };
  },
  methods: {
    getAssignCustomers() {

        var clientesAsignados = this.CustomersStatic.filter(customer => customer.assign == true).sort((a,b) => (a.satisfaction > b.satisfaction) ? 1 : ((b.satisfaction > a.satisfaction) ? -1 : 0)); 

        this.customers = clientesAsignados;
       
    },
  },
};
</script>

<style>
</style>