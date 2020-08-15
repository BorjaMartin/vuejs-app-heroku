<template>
  <div class="container" id="config">
    <b-modal
      id="modal-customer1"
      title="Clientes Registrados"
      :cancel-disabled="true"
      :hide-footer="true"
      :ok-disabled="true"
    >
      <ModalCustomer></ModalCustomer>
    </b-modal>

    <h1>Configuration</h1>
    <div class="row">
      <div class="col-md-12 align-self-center">
        <form class="form-inline" @submit.prevent="calculate">
          <div
            class="form-group row justify-content-md-center col-12"
            v-for="(trainer, index) in trainers"
            v-bind:key="trainer.title"
          >
            <div class="text-left col-12 mt-4 mb-md-4">ENTRENADOR {{index + 1}}</div>
            <div class="form-group mt-sm-2 col-xs-6">
              <label class="pl-3 mr-sm-2">Nombre</label>
              <input class="form-control col-md-6" v-model="trainer.name" />
            </div>
            <div class="form-group mt-sm-2 col-xs-6">
              <label class="pl-3 mr-sm-2">Valoración</label>
              <input
                type="number"
                class="form-control col-md-3"
                max="5"
                min="0"
                step="0.1"
                v-model="trainer.assessment"
              />
            </div>
            <div class="form-group mt-sm-2 col-xs-6">
              <label class="pl-3 mr-sm-2">Máximo número de clientes</label>
              <input
                type="number"
                class="form-control col-md-3"
                max="10"
                min="0"
                v-model="trainer.maxCustomer"
              />
            </div>
            <div class="col-12 mt-4 text-left mb-md-4">
              <hr />
            </div>
          </div>
          <div class="col-12">
            <b-button
              variant="primary"
              class="btn ml-2 float-right"
              type="submit"
            >Calcular resultados</b-button>

            <b-button
              v-b-modal.modal-customer1
              variant="secondary"
              class="btn ml-2 float-right"
            >Ver tabla de clientes</b-button>


          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import Trainer from "../trainer.js";

import ModalCustomer from "./ModalCustomer";

import TrainersModel from "../../backend/models/trainer.js";
import CustomersModel from "../../backend/models/customer.js";



function calcSatisfaction(assessment,reputationImport) {

    //Normalizamos  las escalas a 0-5
    var normAssessment = assessment / 5;
    normAssessment = normAssessment * 10;
   
    var valueSatisfaction = (normAssessment / reputationImport) * 100;

  
    return valueSatisfaction.toFixed(0) ;
  }

export default {
  name: "MainConfig",
  components: {
    ModalCustomer,
  },
  data() {
    return {
      customers: [],
      trainer: new Trainer("", 0, 0, this.customers),
      TrainersStatic: TrainersModel,
      CustomersStatic: CustomersModel,
      /*
      trainers: [
        { title: "Entrenador 1", name: "", assessment: 0, maxCustomer: 0 , complete:false},
        { title: "Entrenador 2", name: "", assessment: 0, maxCustomer: 0 , complete:false},
        { title: "Entrenador 3", name: "", assessment: 0, maxCustomer: 0 , complete:false},
        { title: "Entrenador 4", name: "", assessment: 0, maxCustomer: 0 , complete:false},
        { title: "Entrenador 5", name: "", assessment: 0, maxCustomer: 0 , complete:false},
      ],
      */
     
      trainers: [
        { title: "Entrenador 1", name: "A", assessment: 4.5, maxCustomer: 1 , complete:false},
        { title: "Entrenador 2", name: "B", assessment: 3.2, maxCustomer: 4 , complete:false},
        { title: "Entrenador 3", name: "C", assessment: 1.2, maxCustomer: 3 , complete:false},
        { title: "Entrenador 4", name: "D", assessment: 3.4, maxCustomer: 2 , complete:false},
        { title: "Entrenador 5", name: "", assessment: 0, maxCustomer: 0 , complete:false},
      ],
      
    };
  },
  methods: {
    calculate() {
      
        var ArraysTrainers = this.trainers;

        this.save(ArraysTrainers);
        this.update()
        this.$router.push("/Result");

    },

    save(req) {

        console.log("SAVE");
  
        // Recoger parametros
        var params = req;

        if (Array.isArray(params)) {
           
            params.forEach((value) => {
                if (value.name) {

                    if (! this.TrainersStatic.find(trainer => trainer.name == value.name)){
                        //Crear el entrenador a guardar
                        var arrayCustomers = [];
                        value.customer = arrayCustomers;
                        this.TrainersStatic.push(value);
                    }
                }

            });
          
        }
     


    },


    update() {

        console.log("UPDATE");

        var CustomersStaticUpdate = this.CustomersStatic; 
         console.log(this.CustomersStatic);
        var clienteNoAsignado = [];
        var clientesAsignados = [];
        // Busqueda de clientes que no tienen entrenador asignado (assign = false) ordenados por importancia de reputación del entrenador
        clienteNoAsignado = this.CustomersStatic.sort((a,b) => (a.reputationImport < b.reputationImport) ? 1 : ((b.reputationImport < a.reputationImport) ? -1 : 0)); 
        
        // Busqueda de entrenadores ordenados por reputación
         
         var TrainersReputation = this.TrainersStatic.sort((a,b) => (a.assessment < b.assessment) ? 1 : ((b.assessment < a.assessment) ? -1 : 0));
       
         TrainersReputation.forEach((trainerFind) => { 
            var  asignados = 0;

                if ( !trainerFind.complete ) {
                    for (var i = 0; i < parseInt(trainerFind.maxCustomer); i++) {
                        
                        if (clienteNoAsignado.length > 0){
                            var CustomerName = clienteNoAsignado[0].name;
                            
                            // Busca y actualiza el cliente que ha sido asignado a un entrenador  
                             CustomersStaticUpdate.forEach((CustomersUpdate) => { 
                                if (CustomersUpdate.name == CustomerName && CustomersUpdate.assign == false){
                                    CustomersUpdate.assign = true;
                                    trainerFind.customer.push(CustomersUpdate);

                                    var resultSatisfaction = calcSatisfaction(trainerFind.assessment,CustomersUpdate.reputationImport);

                                    CustomersUpdate.satisfaction = resultSatisfaction;
                                    clientesAsignados.push(CustomersUpdate);
                                      
                                    //this.CustomersStatic[updateIndex] = CustomersUpdate;
                                    this.CustomersStatic.push(CustomersUpdate);
                                    
                                }
                               
                            });

                            clienteNoAsignado.shift();
                            asignados++;
                        }

                    }

                    if (parseInt(trainerFind.maxCustomer) == asignados)
                    trainerFind.complete = true;
                        
                        // Actualiza el entrenador con los clientes que se le han asignado  
                        this.TrainersStatic = TrainersReputation;
                       

    

                }

         });

    },


  },
};
</script>

