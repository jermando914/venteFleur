import React from "react";
import img2 from './asserts/1.jpg'
import img1 from './asserts/2.jpg'
import img3 from './asserts/3.jpg'
import img4 from './asserts/4.jpg'
import img5 from './asserts/5.jpg'
import img6 from './asserts/6.jpg'
import { Link } from "react-router-dom";
import car from './asserts/12.jpg'
import car2 from './asserts/13.jpg'
import car3 from './asserts/14.jpg'
import car4 from './asserts/15.jpg'
import car5 from './asserts/16.jpg'
import car6 from './asserts/17.jpg'
import car7 from './asserts/18.jpg'
import car8 from './asserts/19.jpg'
import car9 from './asserts/20.jpg'
import car10 from './asserts/16.jpg'
import car11 from './asserts/17.jpg'
import car12 from './asserts/18.jpg'
import car13 from './asserts/19.jpg'
import car14 from './asserts/20.jpg'
import car15 from './asserts/20.jpg'
import logo from './asserts/logo.jpg'



function AccueilFleurs() {
    
   
    return(
        <div className="bg-danger">
            <div className="container py-5">
                 <h1 className="my-4 text-center fw-700" style={{color: 'white'}}>
               REFLET AGENCY BOUTIQUE DE FLEURS EN LIGNE 
                </h1><img src={logo} alt="" className="img-fluid w-1" style={{width: '25%', marginLeft: '35%'}}/>
            <p className="lead text-center mb-5" style={{color: 'white'}}> Bienvenue chez Fleurie, la boutique en ligne qui vous offre le meilleur des fleurs fraiches, 
                élégantes et parfumées, livrées directement chez vous.
            </p>
            <div className="row bg-primary w-1200 h-100">
                <div className="col-md-6">
                    <h3 style={{color: 'white'}}> Nos engagements</h3>
                    <ul>
                        <li>Fleurs fraiches sélectionnées chaque matin</li>
                        <li>Livraison rapide partout en <span style={{fontStyle: 'italic', color: 'orangered'}}>EUROPE</span> et en <span style={{fontStyle: 'italic', color: 'orangered'}}>RDC</span></li>
                        <li>Créations personnalisées</li>
                        <li>Paiement sécurisé</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h3 style={{color: 'white'}}> Nos collections</h3>
                    <ul>
                        <li>Bouquet de saison</li>
                        <li>Compositions romantique</li>
                        <li>Plantes décoratives</li>
                        <li>Fleurs pour deuil</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 style={{color: 'white'}}> Pourqoui choisir Fleurie ?</h3>
                    <ul>
                        <li>Artisans fleuristes passionnés</li>
                        <li>Design moderne et naturel</li>
                    <li>Service client 7j/7 et 24/24</li>
                    </ul>
                </div>
            </div>
        </div>
        <section className="header col-16 bg-light   mt-4 gap-1"  >
            <h1 className="text-center" style={{fontWeight:'700', fontFamily: 'Good Brush'}}>Liste de fleurs</h1>
            <img src={img2} alt="" className="img-fluid rounded" style={{width:'30%', height:'40vh'}} />
            
            <img src={img1} alt="" className="img-fluid rounded" style={{width:'30%', height:'40vh', margin:'5%'}} />
             <img src={img3} alt="" className="img-fluid rounded" style={{width:'30%', height:'40vh'}} />
             <img src={img4} alt="" className="img-fluid rounded" style={{width:'30%', height:'40vh'}} />
              <img src={img5} alt="" className="img-fluid rounded" style={{width:'30%', height:'40vh', margin:'5%'}} />
              <img src={img6} alt="" className="img-fluid rounded" style={{width:'30%', height:'40vh'}} />
            
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={car} class="d-block w-100" style={{height: '100vh'}} alt="image"/>
                    <div className="carousel-caption d-md-block">
                        <h5>Bouquet Romantiques</h5>
                        <p>prix : 25$</p>
                     <Link to='/panier' state={{nom: 'Bouquet Romantique', prix: 25}} className="btn btn-success">Commander maintenant <i class="bi bi-caret-right-fill"></i></Link>       
                    </div>
                    </div>

                    <div class="carousel-item">
                    <img src={car2} class="d-block w-100" style={{height: '100vh'}} alt="image"/>
                    <div className="carousel-caption d-md-block">
                        <h5>Bouquet Romantiques Rouge</h5>
                        <p>prix : 25$</p>
                     <Link to='/panier' state={{nom: 'Bouquet Romantique Rouge', prix: 20}} className="btn btn-success">Commander maintenant <i class="bi bi-caret-right-fill"></i></Link>       
                    </div>
                    </div>

                    <div class="carousel-item">
                    <img src={car3} class="d-block w-100" style={{height: '100vh'}} alt="image"/>
                    <div className="carousel-caption d-md-block">
                        <h5>Bouquet Romantiques Jaune</h5>
                        <p>prix : 25$</p>
                     <Link to='/panier' state={{nom: 'Bouquet Romantique Jaune', prix: 25}} className="btn btn-success">Commander maintenant <i class="bi bi-caret-right-fill"></i></Link>       
                    </div>
                    </div>

                     <div class="carousel-item">
                    <img src={car4} class="d-block w-100" style={{height: '100vh'}} alt="image"/>
                    <div className="carousel-caption d-md-block">
                        <h5>Bouquet de Fleurs Magnifique</h5>
                        <p>prix : 30$</p>
                     <Link to='/panier' state={{nom: 'de Fleurs Magnifique', prix: 30}} className="btn btn-success">Commander maintenant <i class="bi bi-caret-right-fill"></i></Link>       
                    </div>
                    </div>

                     <div class="carousel-item">
                    <img src={car5} class="d-block w-100" style={{height: '100vh'}} alt="image"/>
                     <div className="carousel-caption d-md-block">
                        <h5>Bouquet de Fleurs avec de panne génial</h5>
                        <p>prix : 35$</p>
                     <Link to='/panier' state={{nom: 'de Fleurs avec de panne génial', prix: 35}} className="btn btn-success">Commander maintenant <i class="bi bi-caret-right-fill"></i></Link>       
                    </div>
                    </div>

                     <div class="carousel-item">
                    <img src={car6} class="d-block w-100" style={{height: '100vh'}} alt="image"/>
                     <div className="carousel-caption d-md-block">
                        <h5>Bouquet de Fleurs Milticouleur</h5>
                        <p>prix : 30$</p>
                     <Link to='/panier' state={{nom: 'de Fleurs Milticouleur', prix: 30}} className="btn btn-success">Commander maintenant <i class="bi bi-caret-right-fill"></i></Link>       
                    </div>
                    </div>

                     <div class="carousel-item">
                    <img src={car7} class="d-block w-100" style={{height: '100vh'}} alt="image"/>
                     <div className="carousel-caption d-md-block">
                        <h5>Bouquet de Fleurs</h5>
                        <p>prix : 30$</p>
                     <Link to='/panier' state={{nom: 'Boutique de Fleurs', prix: 30}} className="btn btn-success">Commander maintenant <i class="bi bi-caret-right-fill"></i></Link>       
                    </div>
                    </div>

                     <div class="carousel-item">
                    <img src={car8} class="d-block w-100" style={{height: '100vh'}} alt="image"/>
                     <div className="carousel-caption d-md-block">
                        <h5>Bouquet de Fleurs Magnifique super mignonne</h5>
                        <p>prix : 35$</p>
                     <Link to='/panier' state={{nom: 'Boutique de Fleurs Magnifique super mignonne', prix: 35}} className="btn btn-success">Commander maintenant <i class="bi bi-caret-right-fill"></i></Link>       
                    </div>
                    </div>

                     <div class="carousel-item">
                    <img src={car9} class="d-block w-100" style={{height: '100vh'}} alt="image"/>
                     <div className="carousel-caption d-none d-md-block">
                        <h5>Bouquet de Fleurs reflet events</h5>
                        <p>prix : 37$</p>
                     <Link to='/panier' state={{nom: 'Boutique de Fleurs reflet events ', prix: 37}} className="btn btn-success">Commander maintenant <i class="bi bi-caret-right-fill"></i></Link>       
                    </div>
                    </div>

                     <div class="carousel-item">
                    <img src={car10} class="d-block w-100" style={{height: '100vh'}} alt="image"/>
                     <div className="carousel-caption d-none d-md-block">
                        <h5>Bouquet de Fleurs Magnifique</h5>
                        <p>prix : 35$</p>
                     <Link to='/panier' state={{nom: 'Boutique de Fleurs Magnifique', prix: 35}} className="btn btn-success">Commander maintenant <i class="bi bi-caret-right-fill"></i></Link>       
                    </div>
                    </div>

                     <div class="carousel-item">
                    <img src={car11} class="d-block w-100" style={{height: '100vh'}} alt="image"/>
                     <div className="carousel-caption d-none d-md-block">
                        <h5>Bouquet de Fleurs Magnifique</h5>
                        <p>prix : 35$</p>
                     <Link to='/panier' state={{nom: 'Boutique de Fleurs Magnifique', prix: 35}} className="btn btn-success">Commander maintenant <i class="bi bi-caret-right-fill"></i></Link>       
                    </div>
                    </div>

                     <div class="carousel-item">
                    <img src={car12} class="d-block w-100" style={{height: '100vh'}} alt="image"/>
                     <div className="carousel-caption d-none d-md-block">
                        <h5>Bouquet de Fleurs Magnifique</h5>
                        <p>prix : 35$</p>
                     <Link to='/panier' state={{nom: 'Boutique de Fleurs Magnifique', prix: 35}} className="btn btn-success">Commander maintenant <i class="bi bi-caret-right-fill"></i></Link>       
                    </div>
                    </div>
                      
                     <div class="carousel-item">
                    <img src={car13} class="d-block w-100" style={{height: '100vh'}} alt="image"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Bouquet de Fleurs Magnifique</h5>
                        <p>prix : 35$</p>
                     <Link to='/panier' state={{nom: 'Boutique de Fleurs Magnifique', prix: 35}} className="btn btn-success">Commander maintenant <i class="bi bi-caret-right-fill"></i></Link>       
                    </div>
                    </div>
                    
                     <div class="carousel-item">
                    <img src={car14} class="d-block w-100" style={{height: '100vh'}} alt="image"/>
                     <div className="carousel-caption d-none d-md-block">
                        <h5>Bouquet de Fleurs Magnifique</h5>
                        <p>prix : 85$</p>
                     <Link to='/panier' state={{nom: 'Boutique de Fleurs Magnifique', prix: 85}} className="btn btn-success">Commander maintenant <i class="bi bi-caret-right-fill"></i></Link>       
                    </div>
                    </div>

                     <div class="carousel-item">
                    <img src={car15} class="d-block w-100" style={{height: '100vh'}} alt="image"/>
                     <div className="carousel-caption d-none d-md-block">
                        <h5>Bouquet de Fleurs Magnifique</h5>
                        <p>prix : 70$</p>
                     <Link to='/panier' state={{nom: 'Boutique de Fleurs Magnifique', prix: 70}} className="btn btn-success">Commander maintenant <i class="bi bi-caret-right-fill"></i></Link>       
                    </div>
                    </div>
                </div>
                  
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        
        </section>
        </div>
           
    )
}
export default AccueilFleurs