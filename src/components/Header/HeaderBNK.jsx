import './HeaderBNK.scss'
import logobnk48 from '../../assets/images/imgBNK48/bnk48logo2.png'
const HeaderBNK = () => {
    return (
        <div className="headerbnk">
            <div className="container">
                <div className="logoBNK48">
                    <a href="/bnk48"><img src={logobnk48} alt="" /></a>
                </div>
                
            </div>
        </div>
    )
}
export default HeaderBNK