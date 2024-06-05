import { Routes, Route } from 'react-router-dom'
import Beneficiario from './assets/Pages/Beneficiario/Beneficiario'
import PsicologiaGratuita from './assets/Pages/PsicologiaGratuita/PsicologiaGratuita'
import Login from './assets/Pages/Login/Login'
import HomeUser from './assets/Pages/UsuarioLogado/HomeUser'
import PainelUser from './assets/Pages/UsuarioLogado/PainelUser'

export default function MainRoutes(){
    return(
        <Routes>
            <Route path='/Beneficiario' element={<Beneficiario />}></Route>
            <Route path='/PsicologiaGratuita' element={<PsicologiaGratuita />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/HomeUsuario' element={<HomeUser />}></Route>
            <Route path='/PainelUser' element={<PainelUser />}></Route>
            
        </Routes>
    )

}