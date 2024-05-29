import ImgCabecalho from '../../Images/BeneficiarioImg/ImgCabecalho.png'
import ImgFuncionalidades from '../../Images/BeneficiarioImg/ImgFuncionalidades.png'
import ImgGratuidade from '../../Images/BeneficiarioImg/ImgGratuidade.png'
import IconAcessibilidade from '../../Images/BeneficiarioImg/IconAcessibilidade.png'
import IconAgenda from '../../Images/BeneficiarioImg/IconAgenda.png'
import IconCerebro from '../../Images/BeneficiarioImg/IconCerebro.png'
import IconDinheiro from '../../Images/BeneficiarioImg/IconDinheiro.png'
import IconQuebraCabeca from '../../Images/BeneficiarioImg/IconQuebraCabeca.png'
import BtnIconCalendario from '../../Images/BeneficiarioImg/BtnIconCalendario.png'
import BtnIconSetinha from '../../Images/BeneficiarioImg/BtnIconSetinha.png'
import './Beneficiario.css'
import Faq from './Faq'


export default function Beneficiario() {
    return (
        <main className='BeneficiarioMain'>
            <section className='Cabecalho'>
                <div className='BoxImg'>
                    <img src={ImgCabecalho} alt="Imagem de uma pessoa realizando uma sessão online pelo celular" />
                </div>
                <div className='BoxTextCabecalho'>
                    <h1>A <span className='CorRoxa'>saúde mental</span> não é apenas um elemento, mas um dos <span className='CorRoxa'>pilares essenciais.</span></h1>
                    <div className='BoxP'>
                        <p>Desenvolva esse pilar conosco e venha florecer o seu crescimento pessoal e  sua qualidade de vida!</p>
                        <p>Coloque hoje mesmo sua saúde mental em primeiro lugar com apenas um clique.</p>
                    </div>
                    <button className='BtnAgendarConsulta'>
                        <img src={BtnIconCalendario} alt="Icon calendário" />
                        Agende Consulta
                        <img src={BtnIconSetinha} alt="Icon de uma setinha" />
                    </button>
                </div>
            </section>
            <section className='Beneficios'>
                <h2>Na <span className='CorRoxa'>Intermentes</span>, temos o cuidado que você precisa</h2>
                <div className='ContainerBeneficios'>
                    <div className='BoxImg'>
                        <img src={ImgFuncionalidades} alt="Imagem de uma pessoa fazendo um simbolo de coração para o usuário" />
                    </div>
                    <ul className='ListBeneficios'>
                        <li>
                            <img src={IconAcessibilidade} alt="" />
                            <p>Nosso serviço foi pensado para ser <span className='CorRoxa'>acessível</span> a quem mais precisa: <span className='CorRoxa'>VOCÊ!</span></p>
                        </li>
                        <li>
                            <img src={IconCerebro} alt="" />
                            <p>Sessões online com apenas alguns cliques que acontecem por videochamadas, com total <span className='CorRoxa'>segurança e sigilo.</span></p>
                        </li>
                        <li>
                            <img src={IconDinheiro} alt="" />
                            <p><span className='CorRoxa'>Valores para todos os públicos</span>, saúde mental não deve ser vista como privilêgio e sim uma necessidade de todos!!</p>
                        </li>
                        <li>
                            <img src={IconQuebraCabeca} alt="" />
                            <p>Psicólogos credenciados pelo CRP, <span className='CorRoxa'>diferentes especialidades</span> e <span className='CorRoxa'>diversidade nos profissionais</span>, para assim aumentar a <span className='CorRoxa'>identificação</span> e ajudar você a encontrar o <span className='CorRoxa'>melhor psicologo para suas necessidades.</span></p>
                        </li>
                        <li>
                            <img src={IconAgenda} alt="" />
                            <p><span className='CorRoxa'>O bem-estar na palma da sua mão</span>, escolha o horário que melhor se adapta à sua rotina e inicia sua <span className='CorRoxa'>jornada de transformação.</span></p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='FAQ'>
                <div className='BoxTitleFaq'>
                    <h2>Como funciona a terapia online na <span className='CorRoxa'>Intermentes</span></h2  >
                    <p>Aqui, você entenderá melhor como se cadastrar em nosso site, como funciona a nossa plataforma, como escolher o melhor psicólogo para você e como garantimos a confidencialidade das suas informações:</p>
                </div>
                <Faq />
            </section>
            <section className='Gratuidade'>
            <div className='BoxImg'>
                    <img src={ImgGratuidade} alt="Imagem de uma pessoa se abraçando" />
                </div>
                <div className='BoxTextCabecalho'>
                    <h1>A sua <span className='CorRoxa'>mente saúdavel</span> é o resultado do nosso trabalho bem feito.  <span className='CorRoxa'>Intermentes</span> para <span className='CorRoxa'>todos</span>.</h1>
                    <div className='BoxP'>
                        <p>Conheça nossas parcerias com ONGs que disponibilizam psicologia gratuita e se preocupam com a sua saúde mental.</p>
                        <p>Um pilar essencial que não deve ser um privilégio. Lutamos para que todos possam florescer em seu crescimento e sua qualidade de vida!</p>
                    </div>
                    <button className='BtnAgendarConsulta'>
                        <img src={BtnIconCalendario} alt="Icon calendário" />
                        Agende gratuitamente
                        <img src={BtnIconSetinha} alt="Icon de uma setinha" />
                    </button>
                </div>
            </section>
        </main>
    );
}
