import './PsicologiaGratuita.css'
import ImgCabecalho from '../../Images/PsicologiaGratuitaImg/ImgCabecalho.png'

export default function PsicologiaGratuita() {
    return (
        <main className='MainPsicologiaGratuita'>
            <section className='Cabecalho'>
                <div className='BoxImg'>
                    <img src={ImgCabecalho} alt="Imagens de 3 pessoas diferentes sorrindo" />
                </div>
                <div className='ContainterText'>
                    <h1>Aqui você encontra a <span className='CorRoxa'>oportunidade</span> de cuidar da sua <span className='CorRoxa'>mente gratuitamente</span>.</h1>
                    <p>Trabalhamos para que todos que não tem condições financeiras, possam cuidar da sua saúde mental.</p>
                    <p>Concentramos algumas Ong’s para impulsionar o alcance do cuidado que é necessário :D</p>
                </div>
            </section>
            <section className='ContainerOngs'>
                <h2>ONG'S</h2>
                <div className='BoxOngs'>
                    <div className='block'></div>
                    <div>
                        <div class="social">
                            <a href="">
                               insta
                            </a>
                            <a href="">
                               face
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3>Titulo da ong</h3>
                        <p>localização</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorum iusto a tempora sint. Illum eius voluptatum possimus architecto! Laboriosam sunt ipsa quis sed quo a inventore accusamus quia vitae.</p>
                        <a href="">Como agendar sessão</a>
                    </div>
                </div>
            </section>
        </main>
    )
}