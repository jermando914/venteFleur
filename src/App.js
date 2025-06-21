import AccueilFleurs from './Page d\'accueil/AccueilFleurs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Page de contact/Footer';
import NavBars from './Page d\'accueil/NavBars';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Page de contact/PageDeContact';
import Panier from './Panier d\'achat/PanierD\'achat';



function App() {
  return (  
    <BrowserRouter>
     <NavBars/>
    <Routes>
      <Route path='/' element={<AccueilFleurs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/panier' element={<Panier/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
