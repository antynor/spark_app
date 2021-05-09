import React from 'react'
import '../InfoSection/Info.css'
import {Link as LinkR} from 'react-router-dom'
 import login from '../images/login.svg'
export default function Discover(){
    return(
        <div className="InfoContainer2">
            <div className="InfoWrapper">
                <div className="InfoRow">
                    <div className ="column1">
                        <div className="ImgWrap">
                        <img src={login} alt="Girl in a jacket" className="Img" /> 
                        </div>
                    </div>
               
                    <div className="column2">
                    <div className="TextWrap">
                        <h3 className = "top1"> LOGIN</h3>
                        <h1 className =" InfoHead2">Login to your account today</h1>
                        <p className="text2">We have cars in a lot of cities. Login and find car for you.</p>
                        <nav className="HomeBtnCont">
                            <LinkR to='/Plans' className="BtnLink2">
                            Learn More
                            </LinkR>
                        </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
           
    )
}