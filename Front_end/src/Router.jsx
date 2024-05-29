import { Routes, Route } from 'react-router-dom'
import Beneficiario from './assets/Pages/Beneficiario/Beneficiario'
import PsicologiaGratuita from './assets/Pages/PsicologiaGratuita/PsicologiaGratuita'

export default function MainRoutes(){
    return(
        <Routes>
            <Route path='/Beneficiario' element={<Beneficiario />}></Route>
            <Route path='/PsicologiaGratuita' element={<PsicologiaGratuita />}></Route>
        </Routes>
    )

}