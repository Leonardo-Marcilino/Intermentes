import { Link } from 'react-router-dom';
import './Header.css'
import Logo from '../../Images/Icons/Logo.png'



function Header() {
    return (
        <header>
            <nav className='MenuLinks'>
                <div className='BoxLogo'>
                    <a href=""><img src={Logo} alt="Logo da Intermentes" /></a>
                    <p>Psicologia para todos</p>
                </div>
                <ul className='ListaLinks'>
                    <li className='LinkItem'>
                        <a href="">Inicio</a>
                    </li>
                    <li className='LinkItem LiDropMenu'>
                        <a>Serviços</a>
                        <div className='DropMenu'>
                            <a>
                                <div className='DropMenuBox'>
                                    <p className='TitleDropMenu Show'>Para especialistas</p>
                                    <p className='DescriptionDropMenu Show'>Compartilhe seu trabalho conosco e não saia perdendo</p>
                                </div>
                            </a>
                            <Link to={'/Beneficiario'}>
                                <div className='DropMenuBox'>
                                    <p className='TitleDropMenu Show'>Para beneficiários</p>
                                    <p className='DescriptionDropMenu Show'>O cuidado que precisa em apenas um lugar</p>
                                </div>
                            </Link>

                            <Link to={'/PsicologiaGratuita'}>
                                <div className='DropMenuBox'>
                                    <p className='TitleDropMenu Show'>Psicologia Gratuita</p>
                                    <p className='DescriptionDropMenu Show'>Aqui abraçamos aqueles que precisam e não tem condições</p>
                                </div>
                            </Link>
                            <a href="">
                                <div className='DropMenuBox'>
                                    <p className='TitleDropMenu CorRoxa Show'>Agende sua consulta</p>
                                    <p className='DescriptionDropMenu CorRoxa Show'>Encontre seu psicologo aqui e inicie a sua jornada</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li className='LinkItem '>
                        <a href="">Parcerias</a>

                    </li>
                    <li className='LinkItem'>
                        <a href="">Blog</a>
                    </li>
                    <li className='LinkItem'>
                        <a href="">Sobre Nós</a>
                    </li>
                </ul>
                <div className='BoxAcessar'>
                <Link to={'/Login'}><a href="" className='Entrar'>Entrar</a></Link>
                <Link to={'/Login'}><a href="" className='Cadastrar' >Cadastrar</a></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header