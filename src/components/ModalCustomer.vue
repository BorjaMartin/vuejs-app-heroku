<template>
  <div>
    <b-table striped hover :fields="fields" :items="customers"></b-table>
  </div>
</template>

<script>


import CustomersModel from "../../backend/models/customer.js";


export default {
  name: "ModalCustomer",
  mounted() {
    this.getCustomers();
  },
  data() {
    return {
      customers: [ ],
      CustomersStatic: CustomersModel,
      fields: [
          {
            key: 'id',
            thClass: 'd-none', tdClass: 'd-none'
          },
          {
            key: 'name',
            label: 'Nombre del Cliente',
            sortable: false
          },
          {
            key: 'reputationImport',
            label: 'Importancia de la reputación del entrenador',
            sortable: true,
          }
        ],
    };
  },
  methods: {
    
    getCustomers() {
        this.customers = this.CustomersStatic.sort();
    },
  },
};
</script>

