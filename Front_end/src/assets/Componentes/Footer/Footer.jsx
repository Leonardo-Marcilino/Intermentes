import './Footer.css'
import Logo from '../../Images/Icons/Logo.png'
import IconInsta from'../../Images/FooterImg/IconInsta.png'
import IconLinkdin from'../../Images/FooterImg/IconLinkdin.png'
import IconFace from'../../Images/FooterImg/IconFace.png'


function Footer() {
    return (
        <footer>
            <nav className='Container'>
                <div className='ContainerItem'>
                    <ul className='ListFooter'>
                        <h3 className='SubTitle'>Sou Paciente</h3>
                        <li><a href="">Encontre seu Psicologo</a></li>
                        <li><a href="">Sessões Gratuitas?</a></li>
                        <h3 className='SubTitle'>Sou especialista</h3>
                        <li><a href="">Beneficio para minha profissão</a></li>
                    </ul>
                    <div className='BoxLogoFooter'>
                        <a href=""><img src={Logo} alt="Logo da Intermentes" /></a>
                    </div>
                </div>
                <div className='GrayLine'></div>
                <div className='ContainerItem'>
                    <ul className='ListFooter'>
                        <h3 className='SubTitle'>Ajuda</h3>
                        <li><a href="">Política de privacidade</a></li>
                        <li><a href="">Perguntas frequentes</a></li>
                        <li><a href="">Canal de Denuncias</a></li>
                        <li><a href="">Termos de uso</a></li>
                    </ul>
                </div>
                <div className='GrayLine'></div>
                <div className='ContainerItem'>
                    <ul className='ListFooter'>
                        <h3 className='SubTitle'>Atendimento</h3>
                        <li><a href="">Atendimento a clientes de segunda à sexta feira das 09h às 18h (exceto feriados)</a></li>
                        <li><a href=""><span>Contato:</span> (00) 00000-0000</a></li>
                        <li><a href=""><span>Usuários e colaboradores:</span> contato@intermentes.com</a></li>
                        <li><a href=""><span>Profissionais:</span> profissionais@intermentes.com</a></li>
                    </ul>
                </div>
                <div className='GrayLine'></div>
                <div className='ContainerItem'>
                    <ul className='ListFooter'>
                        <h3 className='SubTitle'>Mapa</h3>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Serviços</a></li>
                        <li><a href="">Parcerias</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Sobre nós</a></li>
                    </ul>
                    <h3 className='SubTitle'>Onde Estamos?</h3>
                    <ul className='ListRedes'>
                        <li><a href=''><img src={IconInsta} alt="" /></a></li>
                        <li><a href='' ><img src={IconFace} alt="" /></a></li>
                        <li><a href=''><img src={IconLinkdin} alt="" /></a></li>
                    </ul>
                </div>
            </nav>
            <p className='Copy'>© <span className='CorRoxa'>Intermentes</span> | todos os direitos reservados | 2024</p>
        </footer>
    )
}

export default Footer