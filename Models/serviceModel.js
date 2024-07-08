const mongoose = require('mongoose');


const serviceSchema = new mongoose.Schema({

Id: { type: String, required: true }, 

Name: { type: String, required: true },

Descreption: { type: String, required: true } 

});


const Service = mongoose.model('Service', serviceSchema);


module.exports = Service;