import './Footer.css'
import Logo from '../../Images/Icons/Logo.png'
import IconInsta from '../../Images/FooterImg/IconInsta.png'
import IconLinkdin from '../../Images/FooterImg/IconLinkdin.png'
import IconFace from '../../Images/FooterImg/IconFace.png'


function Footer() {
    return (
        <footer>
            <div className='Container'>
                <div className='ContainerItem'>
                    <h3 className='SubTitle'>Sou Paciente</h3>
                    <ul className='ListFooter'>
                        <li><a href="">Encontre seu Psicologo</a></li>
                        <li><a href="">Sessões Gratuitas?</a></li>
                    </ul>
                    <h3 className='SubTitle'>Sou especialista</h3>
                    <ul className='ListFooter'>
                        <li><a href="">Beneficio para minha profissão</a></li>
                    </ul>
                    <div className='BoxLogoFooter'>
                        <a href=""><img src={Logo} alt="Logo da Intermentes" /></a>
                    </div>
                </div>
                <div className='GrayLine'></div>
                <div className='ContainerItem'>
                    <h3 className='SubTitle'>Ajuda</h3>
                    <ul className='ListFooter'>
                        <li><a href="">Política de privacidade</a></li>
                        <li><a href="">Perguntas frequentes</a></li>
                        <li><a href="">Canal de Denuncias</a></li>
                        <li><a href="">Termos de uso</a></li>
                    </ul>
                </div>
                <div className='GrayLine'></div>
                <div className='ContainerItem'>
                    <h3 className='SubTitle'>Atendimento</h3>
                    <ul className='ListFooter'>
                        <li>Atendimento a clientes de segunda à<br />sexta feira das 09h às 18h (exceto feriados)</li>
                        <li><span>Contato:</span> (00) 00000-0000</li>
                        <li><span>Usuários e colaboradores:<br /></span> contato@intermentes.com</li>
                        <li><span>Profissionais:<br /></span> profissionais@intermentes.com</li>
                    </ul>
                </div>
                <div className='GrayLine'></div>
                <div className='ContainerItem'>
                    <h3 className='SubTitle'>Mapa</h3>
                    <ul className='ListFooter'>
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
            </div>
            <p className='Copy'>© <span className='CorRoxa'>Intermentes</span> | todos os direitos reservados | 2024</p>
        </footer>
    )
}

export default Footer