const mongoose = require('mongoose');


const servicegSchema = new mongoose.Schema({

Id: { type: String, required: true }, 

Name: { type: String, required: true },

Descreption: { type: String, required: true } 

});


const Service = mongoose.model('Service', servicegSchema);


module.exports = Service;