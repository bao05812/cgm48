import {Routes, Route} from 'react-router-dom'
import HeaderBNK from "../Header/HeaderBNK"
import Bnk48Content from "../bnk48Content/bnk48Content"
import Bnk48Members from './Bnk48Members'
import databnk48 from '../dataMember/databnk48'
const Bnk48Home = () => {
    const newstage1 = databnk48.map( val => val.stage.toLowerCase())
    return (
        <div>
                <HeaderBNK />
            <Routes>
                <Route path='/' element={<Bnk48Content />} />
                {/* {newstage1.map(path => <Route path={path} element={<Bnk48Members />} />)} */}
                <Route path='/bnk' element={ <Bnk48Members />} />
            </Routes>
               
        </div>
    )
}
export default Bnk48Home