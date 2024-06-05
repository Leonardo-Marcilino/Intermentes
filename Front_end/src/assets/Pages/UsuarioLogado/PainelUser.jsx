import './PainelUser.css'
import IconCalendar from '../../Images/UserPage/IconCalendar.svg'
import IconLogout from '../../Images/UserPage/IconLogout.png'
import IconPainelControle from '../../Images/UserPage/IconPainelControle.png'
import IconReembolso from '../../Images/UserPage/IconReembolso.png'

export default function PainelUser() {
    return (
        <main>
            <nav class="nav-page-user">
                <div class="box-data-user">
                    <div class="box-name-user">
                        <h2>Minha conta</h2>
                        <p>Oi, Leo!</p>
                    </div>
                    <p class="data_user_text" id="text_conta"><img src={IconPainelControle} alt="" />
                        Minha conta</p>
                        <p class="data_user_text" id="text_conta"><img src={IconCalendar} alt="" />
                        Agendamentos</p>
                </div>
                <hr />
                <div class="box-data-user">
                    <h3>SESSÕES</h3>
                    <div class="opcao-data">
                    <p class="data_user_text" id="text_conta"><img src={IconReembolso} alt="" />
                        Reembolsos</p>
                    </div>
                </div>
                <hr />
                <p class="icone-sair"><img src={IconLogout} alt="" />
                    Logout</p>
            </nav>
        </main>
    )
}