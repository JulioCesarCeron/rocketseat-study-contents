import React from 'react';
import { FiArrowLeft } from 'react-icons/fi/';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Register() {
	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be The Hero"/>

					<h1>Cadastro</h1>
					<p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos de sua ONG.</p>

					<Link className="back-link" to="/">
						<FiArrowLeft size={16} color="#e02041" />
						Não tenho cadastro
					</Link>
				</section>

				<form action="">
					<input placeholder="Nome da ONG"/>
					<input type="email" placeholder="E-mail" name="" id=""/>
					<input placeholder="WhatsApp"/>

					<div className="input-group">
						<input placeholder="Cidade" />
						<input placeholder="UF" style={{ width: 80 }} />
					</div>
					
					<button type="submit" className="button">Cadastrar</button>
				</form>
			</div>
		</div>
	);
}