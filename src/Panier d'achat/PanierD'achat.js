import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";


function Panier() {
    const location = useLocation();
    const {nom,prix}=location.state || {};

    const confirmerCommande = async() => {
      try{
        const response = await axios.post('http://localhost:5000/api/commande', {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({ 
            produit: '', prix: prix.prix})
        });
        console.log(response.data.message)
        alert('Commande confirmée avec succées');
      } catch(err) {
        alert('Erreur de l\envoie');
      }
      
    }

    return(
      <div className="container mt-5 py-5">
        <div className="card shadow">
        <div className="card-header bg-primary text-white">
                <h1><i class="bi bi-cart4"></i> Achats de fleurs</h1>
        </div>
        <div className="card-body">
        {nom&&prix ? (
              <>
              <h5 className="card-title">produit : {nom}</h5>
              <p className="card-text">prix : {prix} $</p>
              <button className="btn btn-success" onClick={confirmerCommande}> Confirmer la commande</button>
              </>
            ) : (
              <p className="text-danger">Aucun produit sélectionné</p>
            )}
        </div>
        </div>
      </div>
    )
}
export default Panier