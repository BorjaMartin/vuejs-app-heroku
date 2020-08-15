'use strict'

var express = require('express');
var TrainerController = require('../controllers/trainer');

var router = express.Router();


//Rutas para entrenadores
router.post('/trainer/save', TrainerController.save);
router.get('/trainers', TrainerController.getTrainers);
router.get('/trainerCustomer', TrainerController.getTrainerCustomer);
router.post('/updateTrainer', TrainerController.update);
router.get('/getAssignCustomers', TrainerController.getAssignCustomers);
router.get('/customers', TrainerController.getCustomers);





module.exports = router;