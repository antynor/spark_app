import React from 'react';
import ParticlesBg from "particles-bg";
import { Link as LinkR } from 'react-router-dom';
import './home.css'


 export default function Page(){
        return(
        <div id="home" className="Home">
            <div className="HomeBg">
            <ParticlesBg bg={true} type="lines" />
           </div>
           <div className="HomeContent">
               <h1 className="HomeH1">
                    Virtual Car Rental
               </h1>
               <p className="HomeP">
                    Sing up for a new account today and receive 20$ in credit
                    towards your next payment.
               </p>
               <nav className="HomeBtnCont">
            <LinkR to="Plans"  className="BtnLink">
               Get started &nbsp; <i class="fas fa-arrow-circle-right"></i></LinkR>
           </nav>
           </div>
          
        </div>
    )
}

