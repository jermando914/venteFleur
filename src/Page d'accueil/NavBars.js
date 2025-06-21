

import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from './asserts/logo.jpg'

export class NavBars extends Component {
  render() {
    return (
      <div>

               <nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/"><img src={logo} alt="" className="img w-1 logo-animé" style={{width: '10%'}}/> Reflet eventes</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div class="navbar-nav navbar-collapse gap-1" style={{marginLeft: '50%'}}>
                            <Link class="nav-link" aria-current="page" to="/">Accueil</Link>
                            <Link class="nav-link" to="/panier">Achat Fleur</Link>
                            <Link class="nav-link" to="/contact">Contact</Link>
                           
                        </div>
                        </div>
                    </div>
                </nav>
            </div>

    )
  }
}

export default NavBars

