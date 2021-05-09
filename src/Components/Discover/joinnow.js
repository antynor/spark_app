import React from 'react'
import '../InfoSection/Info.css'
import {Link as LinkR} from 'react-router-dom'
 import join from '../images/join.svg'
export default function SignUp(){
    return(
        <div className="InfoContainer2">
            <div className="InfoWrapper">
                <div className="InfoRow">
                    <div className ="column1">
                    <div className="TextWrap">
                        <h3 className = "top1"> JOIN NOW</h3>
                        <h1 className =" InfoHead2">Creating account is easy</h1>
                        <p className="text2">You need less than 100 minutes to create account. 
                        All you need to do is add information.</p>
                        <nav className="HomeBtnCont">
                            <LinkR to='/Plans' className="BtnLink2">
                            Start now
                            </LinkR>
                        </nav>
                        </div>
                        
                    </div>
               
                    <div className="column2">
                    <div className="ImgWrap">
                        <img src={join} alt="Girl in a jacket" className="Img" /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
           
    )
}