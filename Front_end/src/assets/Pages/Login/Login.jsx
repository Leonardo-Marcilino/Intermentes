import React, { useEffect, useRef } from "react";
import "./Login.css"; // Certifique-se de ter o arquivo CSS importado
import ImgLogin from '../../Images/LoginImg/ImgLogin.png'
import ImgCadastro from '../../Images/LoginImg/ImgCadastro.png'
import { Link } from 'react-router-dom';

export default function Login() {
    const containerRef = useRef(null);

    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");

        const container = containerRef.current;

        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });

        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });
    }, []);

    return (
        <div className="container" ref={containerRef}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Intermentes</h2>
                        <div className="containerCheckbox">
                            <h2>Qual o cliente você é?</h2>
                            <div className="checkboxUser">
                                <label for="campo-radio1">Paciente</label>
                                <input type="radio" value="0" name="campo-radio" id="campo-radio1" />

                                <label for="campo-radio2">Psicólogo</label>
                                <input type="radio" value="0" name="campo-radio" id="campo-radio2" />
                            </div>
                        </div>
                        <div className="containerRedes">
                            <p className="social-text">Entre com:</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                        <p className="entreComForms">Entre com:</p>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <Link to={'/HomeUsuario'}>
                            <input type="submit" value="Login" className="btn solid" />
                        </Link>
                    </form>
                    <form action="#" className="sign-up-form">
                        <h2 className="title">Cadastre-se</h2>
                        <div className="checkboxUser">
                            <label for="campo-radio1">Paciente</label>
                            <input type="radio" value="0" name="campo-radio" id="campo-radio1" />

                            <label for="campo-radio2">Psicólogo</label>
                            <input type="radio" value="0" name="campo-radio" id="campo-radio2" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Digite seu nome" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="number" placeholder="CPF" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="number" placeholder="CRP" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="number" placeholder="(__) ___-___" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="box-input-senha">
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Senha" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Confirme a senha" />
                            </div>
                        </div>
                        <input type="submit" className="btn" value="Cadastrar-se" />
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>É novo aqui ?</h3>
                        <p>
                            Está esperando o que para se inscrever e impulsionar seus cuidados mentais  com a InterMentes :D
                        </p>
                        <button className="btn transparent" id="sign-up-btn">
                            Cadastre-se
                        </button>
                    </div>
                    <div className="left-image">
                        <img src={ImgLogin} className="image" alt="" />
                    </div>
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>Você já é um de nós?</h3>
                        <p>
                            Estavamos com saudade de você, clique no botão abaixo e volte a cuidar da sua saúde com a InterMentes :D
                        </p>

                        <button className="btn transparent" id="sign-in-btn">
                            Entrar
                        </button>
                    </div>
                    <div className="right-image">
                        <img src={ImgCadastro} className="image-cadastro" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
