import { Link } from 'react-router-dom';
import './HeaderUser.css'
import Logo from '../../Images/Icons/Logo.png'
import setinha from '../../Images/Icons/IconSetinhaPraBaixo.png'
import IconCalendar from '../../Images/UserPage/IconCalendar.svg'
import IconLogout from '../../Images/UserPage/IconLogout.png'
import IconPainelControle from '../../Images/UserPage/IconPainelControle.png'
import IconReembolso from '../../Images/UserPage/IconReembolso.png'




function HeaderUser() {
    return (
        <header>
            <nav className='MenuLinks'>
                <div className='ContainerMenu'>
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
                </div>
                <div className='BoxAcessar'>
                    <p>Olá, Leonardo </p>
                    <div className='ContainerMenuUser'>
                        <img src={setinha} alt="" className='IconSetinha'/>
                        <div className='DropMenuUser'>
                        <Link to={'/PainelUser'}>
                                <div className='BoxItemMenu'>
                                        <img src={IconPainelControle} alt="" />
                                        <p>Painel de controle</p>
                                </div>
                            </Link>
                            <a>
                                <div className='BoxItemMenu'>
                                        <img src={IconCalendar} alt="" />
                                        <p>Agendamentos</p>
                                </div>
                            </a>
                            <a>
                                <div className='BoxItemMenu'>
                                        <img src={IconReembolso} alt="" />
                                        <p>Reembolsos</p>
                                </div>
                            </a>
                            <a>
                                <div className='BoxItemMenu LogoutItem'>
                                        <img src={IconLogout} alt="" />
                                        <p>Logout</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderUser