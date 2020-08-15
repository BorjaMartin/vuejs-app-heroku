'use strict'



//var TrainersStatic = require('../models/trainer');
var CustomersStatic = require('../models/customer');

var controller = {

    getCustomers: (req, res) => {

        console.log("busqueda de clientes en array statico");

        var clientes = CustomersStatic;
        console.log(clientes);
        return res.status(200).send({
            status: 'success',
            clientes
        });


    },


    getCustomersAssign: (req, res) => {


        console.log("busqueda de clientes en array statico asignados 1");
        console.log(CustomersStatic.reverse((a,b)=>a-b));

        var clientesAsignados = CustomersStatic;//.filter(customer => customer.assign == true) ;

        console.log(clientesAsignados);
        return res.status(200).send({
            status: 'success',
            clientesAsignados
        });

       
    },
    


}

module.exports = controller;
