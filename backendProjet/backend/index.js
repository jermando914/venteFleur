const Commande = require('./Commande');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://jermandopendjonga:4OZVfs8hnldZ9thx@cluster0.vw3og9i.mongodb.net/venteFleur?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("MongoDB connecté"))
.catch(err=> console.error("Erreur MongoDB"));

app.post('/api/commande', async (req, res)=> {
    try {
        const {produit, prix} = req.body;
        console.log(req.body)
        const nouvellCommande = new Commande ({produit, prix});
        await nouvellCommande.save();
        res.status(201).json({message: 'Commande enregistrée !!'});
    }catch(error) {
        console.error(error)
        res.status(500).json({message: 'Erreur serveur'});
    }
});
app.listen(5000, () => {
    console.log('Serveur démarré sur le pont 5000')
})