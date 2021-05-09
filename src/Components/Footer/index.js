import React from 'react'
import {Link as LinkR} from 'react-router-dom'
import './footer.css'

export default function Footer(){
    return(
        <div className="FooterContainer">
            <div className="FooterWrap">
                <div className="FooterLinkContainer">
                <div className="FooterLinkWrap">
                    <div className="FooterLinkItems">
                    <h1 className="FooterLinkTitle">About Us</h1>  
                        <LinkR to='/signin' className="FooterLink"> How it Works</LinkR>
                        <LinkR to='/signin' className="FooterLink"> Discover</LinkR>
                        <LinkR to='/signin' className="FooterLink"> Careers</LinkR>
                        <LinkR to='/signin' className="FooterLink"> Plans</LinkR>
                        <LinkR to='/signin' className="FooterLink"> FQA</LinkR>
                    </div> 

                    <div className="FooterLinkItems">
                    <h1 className="FooterLinkTitle">Contact Us</h1>  
                        <LinkR to='/signin' className="FooterLink"> Contact</LinkR>
                        <LinkR to='/signin' className="FooterLink"> Support</LinkR>
                        <LinkR to='/signin' className="FooterLink"> Office</LinkR>
                        <LinkR to='/signin' className="FooterLink"> Constultants</LinkR>
                    
                    </div>
                    </div> 
                    <div className="FooterLinkWrap">
                    <div className="FooterLinkItems">
                    <h1 className="FooterLinkTitle">Video</h1>  
                        <LinkR to='/signin' className="FooterLink"> Videos</LinkR>
                        <LinkR to='/signin' className="FooterLink"> Hello!</LinkR>
                        <LinkR to='/signin' className="FooterLink"> People</LinkR>                    
                    </div>   
                    <div className="FooterLinkItems">
                    <h1 className="FooterLinkTitle">Social Media</h1>  
                        <LinkR to='/signin' className="FooterLink"> Facebook</LinkR>
                        <LinkR to='/signin' className="FooterLink"> Twitter</LinkR>
                        <LinkR to='/signin' className="FooterLink"> Instagram</LinkR>
                        <LinkR to='/signin' className="FooterLink"> Youtube</LinkR>
                    
                    </div> 
                </div>  
                </div>  
            </div>
       </div>
    )
}