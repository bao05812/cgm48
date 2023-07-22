import './bnk48Content.scss'
import databnk48 from "../dataMember/databnk48"

const Bnk48Content = () => {
    return (
        <div className="bnk48Content">
            <div className="container">
                <p className="textmem">Members</p>
                <div className="row">
                        {databnk48.map((val) => (
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
            </div>
        </div>
    )
}
export default Bnk48Content