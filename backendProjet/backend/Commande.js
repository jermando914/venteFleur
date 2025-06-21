const mongoose = require('mongoose');


const commandeSchema = new mongoose.Schema({
    produit : String,
    prix : Number
});

module.exports=mongoose.model('Commande', commandeSchema);