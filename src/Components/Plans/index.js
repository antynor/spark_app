import React from 'react'
import basic from '../images/basic.svg'
import premium from '../images/premium.svg'
import vip from '../images/vip.svg'
import './plan.css'
export default function Plans(){
    return(
        <div className="PlansContainer">
            <h1 className="PlansHead">Our Plans and Pricing</h1>
            <div className="PlanWrap">
                <div className="Card">
                <img src={basic} alt="Girl in a jacket" className="Img2"/>
                <h2 className="PlanH2">
                    Basic </h2>
                <p className="PlanP">20 $ per day </p>
                </div>
                <div className="Card">
                <img src={premium} alt="Girl in a jacket" className="Img2" />
                <h2 className="PlanH2">
                    Premium </h2>
                <p className="PlanP">15 $ per day </p>
                </div>
                <div className="Card">
                <img src={vip} alt="Girl in a jacket" className="Img2" />
                <h2 className="PlanH2">
                    VIP </h2>
                <p className="PlanP">12 $ per day </p>
                </div>
            </div>
            
        </div>
    )
}