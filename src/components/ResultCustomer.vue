<template>

  <div>
    <div class="row">
      <div
        class="card mb-3 m-5"
        style="max-width: 25rem;"
        v-for="(trainer, index) in trainers"
        v-bind:key="index"
      >
        <div class="card-header">
          <div class="row">
            <div class="col-md-10">Entrenador: {{++index}}</div>

            <div class="col-md-2 text-right">
              <b-icon
                icon="info-circle"
                v-b-tooltip.html
                placement="bottom"
                :title="'<strong> Valoración: </strong>  ' + trainer.assessment + '<br /> <strong> Max Cliente:</strong>  ' + trainer.maxCustomer  "
              ></b-icon>
            </div>
          </div>
        </div>

        <div class="card" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-3 pt-2">
              <img
                src="https://www.softzone.es/app/uploads/2018/04/guest.png"
                class="card-img rounded-circle p-2"
              />
            </div>

            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{trainer.name}}</h5>

                <p
                  class="card-text text-left"
                  v-for="(cliente, indC) in trainer.customer"
                  v-bind:key="indC"
                >- Cliente "{{cliente.name}}"</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer bg-grey" style="height: -webkit-fill-available;">{{trainer.customer.length}} Clientes asignados</div>
      </div>
    </div>
  </div>

</template>

<script>

import TrainersModel from "../../backend/models/trainer.js";
//import CustomersModel from "../../backend/models/customer.js";

export default {
  name: "ResultCustomer",
  components: {
    
  },
  mounted() {
    this.getTrainerCustomer();
  },
  data() {
    return {
      trainerVal: 0,
      trainers: [],
      TrainersStatic: TrainersModel,
      //CustomersStatic: CustomersModel,
    };
  },
  methods: {
     getTrainerCustomer(){
        //Busqueda de entrenadores ordenados por Reputación
        this.trainers = this.TrainersStatic;
        
    },

  },

  
};
</script>

