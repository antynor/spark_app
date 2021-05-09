import React from 'react'
import './Info.css'
import {Link as LinkR} from 'react-router-dom'
 import car2 from '../images/car2.svg'
export default function Info(){
    return(
        <div className="InfoContainer">
            <div className="InfoWrapper">
                <div className="InfoRow">
                    <div className ="column1">
                        <div className="TextWrap">
                        <h3 className = "top1"> SPARK CARS</h3>
                        <h1 className =" InfoHead">2000 Diferent Cars</h1>
                        <p className="text1">We have over 2000 cars and all of them are red. From Fiat to Porsche, everything you need. </p>
                        <nav className="HomeBtnCont">
                            <LinkR to= '/singUp'className="BtnLink">
                            Get started &nbsp; <i class="fas fa-arrow-circle-right"></i>
                            </LinkR>
                        </nav>
                        </div>
                    </div>
               
                    <div className="column2">
                        <div className="ImgWrap">
                        <img src={car2} alt="Girl in a jacket" className="Img" /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
           
    )
}