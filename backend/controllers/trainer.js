'use strict'


var TrainersStatic = require('../models/trainer');
var CustomersStatic = require('../models/customer');

function calcSatisfaction(assessment,reputationImport) {

    console.log("LLAMADA A FUNCION " + assessment + reputationImport);

    //Normalizamos  las escalas a 0-5
    var normAssessment = assessment / 5;
    console.log("normAssessment " + normAssessment);
    normAssessment = normAssessment * 10;
    console.log("normAssessment 2 " + normAssessment);
    var valueSatisfaction = (normAssessment / reputationImport) * 100;

    console.log("valueSatisfaction " + valueSatisfaction.toFixed(0));

    return valueSatisfaction.toFixed(0) ;
  }


var controller = {

    save: (req, res) => {

        // Recoger parametros
        var params = req.body;

        
        console.log("Trainer static");
        console.log(TrainersStatic);
        
        if (Array.isArray(params)) {
           
            params.forEach((value, inde) => {

                console.log("value.name " + value.name);


                console.log(value.name);
                if (value.name) {

                    if (! TrainersStatic.find(trainer => trainer.name == value.name)){

                        console.log("No existe " + value.name);
                        //Crear el entrenador a guardar
                        var arrayCustomers = [];

                        value.customer = arrayCustomers;
                        console.log(value);
                        TrainersStatic.push(value);
                    }
                }

            });
            console.log("Return" );
            console.log(TrainersStatic);
            
            return res.status(200).send({
                status: 'success',
                TrainersStatic
            });

        }
     


    },



    getTrainers: (req, res) => {

        console.log("** LIST Trainer static");
        console.log(TrainersStatic);


        console.log("** LIST Customer static");
        console.log(CustomersStatic.reverse((a,b)=>a-b));

        var trainers = TrainersStatic;
        
        if (!Array.isArray(trainers) || (Array.isArray(trainers) && trainers.length == 0)){
            console.log("No existen entrenadores");
            return res.status(200).send({
                status: 'error',
                message: "No existen entrenadores"
            });
        }
       
            return res.status(200).send({
                status: 'success',
                trainers
            });

    
    },

    getTrainerCustomer: (req, res) => {

        
        var trainers = TrainersStatic;
        //Busqueda de entrenadores ordenados por Reputación
        //query.sort('-assessment').exec((err, trainers) => 


            return res.status(200).send({
                status: 'success',
                trainers
            });


    },

    
    update: (req, res) => {

        console.log("UPDATE");

        var CustomersStaticUpdate = CustomersStatic; 
        var clienteNoAsignado = [];
        var clientesAsignados = [];
        // Busqueda de clientes que no tienen entrenador asignado (assign = false) ordenados por importancia de reputación del entrenador
        clienteNoAsignado = CustomersStatic.sort((a,b) => (a.reputationImport < b.reputationImport) ? 1 : ((b.reputationImport < a.reputationImport) ? -1 : 0)); 
        
        // Busqueda de entrenadores ordenados por reputación
         
         var TrainersReputation = TrainersStatic.sort((a,b) => (a.assessment < b.assessment) ? 1 : ((b.assessment < a.assessment) ? -1 : 0)); 
         console.log("ForEach");
       
         TrainersReputation.forEach((trainerFind) => { 
            var  asignados = 0;
            //console.log(trainerFind);

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
                                    console.log("CustomersStaticUpdate RETURN ");
                                    console.log(resultSatisfaction);

                                    CustomersUpdate.satisfaction = resultSatisfaction;
                                    clientesAsignados.push(CustomersUpdate);
                                    CustomersStatic = clientesAsignados;

                                }
                               
                            });

                            clienteNoAsignado.shift();
                            asignados++;
                        }

                    }

                    if (parseInt(trainerFind.maxCustomer) == asignados)
                    trainerFind.complete = true;
                        
                        // Busca y actualiza el entrenador con los clientes que se le han asignado  
                        //TrainersStatic = TrainersStatic.filter(trainer => trainer.name == trainerFind.name) ;
                        TrainersStatic = TrainersReputation;

                        //Trainers.findOneAndUpdate({ _id: trainer._id }, trainer, { new: true }, function (err, resultTrainers) {});

                }


         });

         return res.status(200).send({
            status: 'success',
            TrainersStatic
        });
 



    },


    getCustomers: (req, res) => {

        var clientes = CustomersStatic.sort();

        return res.status(200).send({
            status: 'success',
            clientes
        });


    },

    
    getAssignCustomers: (req, res) => {

        var clientesAsignados = CustomersStatic.filter(customer => customer.assign == true).sort((a,b) => (a.satisfaction > b.satisfaction) ? 1 : ((b.satisfaction > a.satisfaction) ? -1 : 0)); 

        return res.status(200).send({
            status: 'success',
            clientesAsignados
        });

       
    },

}

module.exports = controller;
