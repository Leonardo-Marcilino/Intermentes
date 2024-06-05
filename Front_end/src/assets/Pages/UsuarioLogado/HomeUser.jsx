import './HomeUser.css'
import ImgCabecalho from '../../Images/BeneficiarioImg/ImgCabecalho.png'
import BtnIconCalendario from '../../Images/BeneficiarioImg/BtnIconCalendario.png'
import BtnIconSetinha from '../../Images/BeneficiarioImg/BtnIconSetinha.png'

export default function HomeUser() {
    return (
        <main className='MainUserHome'>
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
        </main>
    )
}