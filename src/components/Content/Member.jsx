import { useState } from 'react'
import "./Member.scss"
import dataMember from "../dataMember/dataMember"
import facebook from "../../assets/images/imgCGM48/FACEBOOK.jpg"
import twitter from "../../assets/images/imgCGM48/TWITTER.jpg"
import youtube from "../../assets/images/imgCGM48/YOUTUBE.jpg"
const Member = () => {

    return (
        <div className="memberPage">
            <div className="container">
                <div className="mainContent">
                    <h1>MEMBERS</h1>
                    <div className="row">
                        {dataMember.map((val) => (
                            <div className="cols-xl-2 cols-md-2 cols-sm-6 cols-xs-6">
                                <div className="mbInfo" key={val} >
                                    <a href={val.stage.toLowerCase()}>
                                        <img src={val.img} alt="" />
                                        <div className="mb-detail">
                                            <p>{val.stage.toUpperCase()}</p>
                                            <span>{val.name.slice(0, 15).toUpperCase() + "..."}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="social">
                        <div className="row">
                            <div className="cols-xl-2 cols-md-2 cols-sm-12 cols-xs-12">
                                <a href="https://www.facebook.com/cgm48official"><img src={facebook} alt="" /></a>                         
                            </div>
                            <div className="cols-xl-2 cols-md-2 cols-sm-12 cols-xs-12">
                                <a href="https://www.youtube.com/c/CGM48official"><img src={youtube} alt="" /></a>                           
                            </div>
                            <div className="cols-xl-2 cols-md-2 cols-sm-12 cols-xs-12">
                                <a href="https://twitter.com/cgm48official"><img src={twitter} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Member