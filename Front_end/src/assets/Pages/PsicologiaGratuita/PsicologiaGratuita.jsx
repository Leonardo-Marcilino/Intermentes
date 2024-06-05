import './PsicologiaGratuita.css'
import ImgCabecalho from '../../Images/PsicologiaGratuitaImg/ImgCabecalho.png'
import IconInsta from '../../Images/FooterImg/IconInsta.png'
import IconFace from '../../Images/FooterImg/IconFace.png'

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
            <section className='SectionOngs'>
                <h2>ONG'S</h2>
                <div className='ContainerOngs'>
                    <div className='BoxOng'>
                        <div className='BoxLogoOng'>
                            <div className='BoxImg'>
                                {/* <img src="" alt="" /> */}
                            </div>
                            <div>
                                <div class="BoxSocial">
                                    <a href="">
                                        <img src={IconInsta} alt="" />
                                    </a>
                                    <a href="">
                                    <img src={IconFace} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='BoxDescriptionOng'>
                            <div className='GroupNameLocalization'>
                                <h3>Titulo da ong</h3>
                                <p>localização</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorum iusto a tempora sint. Illum eius voluptatum possimus architecto! Laboriosam sunt ipsa quis sed quo a inventore accusamus quia vitae.</p>
                            <a href="" className='BtnOng'>Como agendar sessão</a>
                        </div>
                    </div>
                    <div className='BoxOng'>
                        <div className='BoxLogoOng'>
                            <div className='BoxImg'>
                                {/* <img src="" alt="" /> */}
                            </div>
                            <div>
                                <div class="BoxSocial">
                                    <a href="">
                                        <img src={IconInsta} alt="" />
                                    </a>
                                    <a href="">
                                    <img src={IconFace} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='BoxDescriptionOng'>
                            <div className='GroupNameLocalization'>
                                <h3>Titulo da ong</h3>
                                <p>localização</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorum iusto a tempora sint. Illum eius voluptatum possimus architecto! Laboriosam sunt ipsa quis sed quo a inventore accusamus quia vitae.</p>
                            <a href="" className='BtnOng'>Como agendar sessão</a>
                        </div>
                    </div>
                    <div className='BoxOng'>
                        <div className='BoxLogoOng'>
                            <div className='BoxImg'>
                                {/* <img src="" alt="" /> */}
                            </div>
                            <div>
                                <div class="BoxSocial">
                                    <a href="">
                                        <img src={IconInsta} alt="" />
                                    </a>
                                    <a href="">
                                    <img src={IconFace} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='BoxDescriptionOng'>
                            <div className='GroupNameLocalization'>
                                <h3>Titulo da ong</h3>
                                <p>localização</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorum iusto a tempora sint. Illum eius voluptatum possimus architecto! Laboriosam sunt ipsa quis sed quo a inventore accusamus quia vitae.</p>
                            <a href="" className='BtnOng'>Como agendar sessão</a>
                        </div>
                    </div>
                    <div className='BoxOng'>
                        <div className='BoxLogoOng'>
                            <div className='BoxImg'>
                                {/* <img src="" alt="" /> */}
                            </div>
                            <div>
                                <div class="BoxSocial">
                                    <a href="">
                                        <img src={IconInsta} alt="" />
                                    </a>
                                    <a href="">
                                    <img src={IconFace} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='BoxDescriptionOng'>
                            <div className='GroupNameLocalization'>
                                <h3>Titulo da ong</h3>
                                <p>localização</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorum iusto a tempora sint. Illum eius voluptatum possimus architecto! Laboriosam sunt ipsa quis sed quo a inventore accusamus quia vitae.</p>
                            <a href="" className='BtnOng'>Como agendar sessão</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}