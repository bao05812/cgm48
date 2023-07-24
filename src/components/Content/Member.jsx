import { useState } from 'react'
import {Link} from 'react-router-dom'
import "./Member.scss"
import dataMember from "../dataMember/dataMember"
import databnk48 from "../dataMember/databnk48"
import facebook from "../../assets/images/imgCGM48/FACEBOOK.jpg"
import twitter from "../../assets/images/imgCGM48/TWITTER.jpg"
import youtube from "../../assets/images/imgCGM48/YOUTUBE.jpg"
const Member = () => {
    const cg = true
    const getInitialState = () => {
        const value = "CGM48";
        return value;
      };
    
      const [value, setValue] = useState(getInitialState);
     
      const handleChange = (e) => {
        setValue(e.target.value);
    
      };
    return (
        <div className="memberPage">
            <div className="container">
                <div className="mainContent">
                    <div className="selectBand">
                    <h1>MEMBERS</h1> 
                    <div className='band'>
                        <select value={value} onChange={handleChange}>
                            <option value="CGM48">CGM48</option>
                            <option value="BNK48">BNK48</option>                          
                        </select>
                    </div>
                    </div>
                    <div className="row">
                        {(value == "CGM48" ? [...dataMember] : [...databnk48]).map((val) => (
                            <div className="cols-xl-2 cols-md-2 cols-sm-6 cols-xs-6">
                                <div className="mbInfo" key={val} >
                                    <Link to={val.stage.toLowerCase()}>
                                        <img src={val.img} alt="" />
                                        <div className="mb-detail">
                                            <p>{val.stage.toUpperCase()}</p>
                                            <span>{val.name.slice(0, 15).toUpperCase() + "..."}</span>
                                        </div>
                                    </Link>
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