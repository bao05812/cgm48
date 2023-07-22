import "./angel.scss"

import dataMember from "../dataMember/dataMember"
const Angel = () => {
    const getHref = window.location.href.slice(22)
    const newStringmb = dataMember.filter((val)=> {
        if(val.stage == getHref[0].toUpperCase() + getHref.slice(1)){
            return{
                val
            }
        }
    })
    return(
        <div className="angel">
            <div className="container">
                <div className="content-padding">
                    <a href="/"><h1>MEMBERS</h1></a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 20 24">
                        <path id="Polygon_2" d="M12 0l12 20H0z" class="cls-1" data-name="Polygon 2" transform="rotate(90 10 10)" />
                    </svg>
                    <p>{getHref.toUpperCase()}</p>
                </div> 
                {newStringmb.map((val) => (
                    <div className="profile">
                        <img src={val.img2} alt="" />
                        <div className="infoMb">
                            <h3>{val.stage.toUpperCase()}</h3>
                            <p>{val.thaiName}</p>
                            <p>{val.name}</p>
                            <p>CGM48 Team {val.team}</p>
                            <div className="more">
                                <div className="more-title">
                                    <p>Date of birth </p>
                                    <p>Province </p>
                                    <p>Blood </p>
                                    <p>Group</p>
                                </div>
                                <div className="more-info">
                                    <p>{val.dob}</p>
                                    <p>{val.province}</p>
                                    <p>{val.blood}</p>
                                    <p>{val.group}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Angel