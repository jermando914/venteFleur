import React from "react";




function Footer() {
    return(
        <footer className="bg-dark text-white text-center py-5 mt-5">
            <div className="container">
                <p>Suivez-nous</p>
                <a href="https://web.facebook.com/jeremie.pendjonga"  className="mx-2">
                    <i class="bi bi-facebook"></i>
                </a>
                <a href="https://wa.me/0820229212"  className="mx-2">
                    
                    <i class="bi bi-whatsapp"></i>
                </a>
                <a href="#"  className="mx-2">
                    <i class="bi bi-tiktok"></i>
                </a>
                <p className="mt-3">@ 2025 Boutique reflet events agency tout droits réservés.</p>
            </div>
        <p className="card-text">Adresse: Kinshasa, kintambo komoriko croisement  OUA référence feux signalisation roulages</p>
        <i class="bi bi-phone">+243 972903470</i>
        </footer>
    )
}
export default Footer