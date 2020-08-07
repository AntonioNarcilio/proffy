import React, { useState, useEffect } from 'react';

import {Link} from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg';
import landingIng from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purplerHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css'

function Landing() {

	const [totalConnections, setTotalConnections] = useState(0);

	// 1° parâmetro uma função
	// 2° um array
	// 🎯 Toda vez que as informações do 2° parâmetro sofrerem alterações
	// 			a função do 1° parâmetro deve ser executada

	// Obs: caso queira que a função execute uma unica vez é só deixa o array vazio
	useEffect(() => {
		api.get('connections').then(response => {
			const { total } = response.data;

			setTotalConnections(total);
		})
	}, []);

	return (
		<div id="page-landing">
			<div id="page-landing-content" className="container">

				<div className="logo-container">
					<img src={logoImg} alt="Proffy"/>
					<h2>Sua plataforma de estudos online.</h2>
				</div>

				<img 
					src={landingIng} 
					alt="Plataforma de estudos" 
					className="hero-image"
				/>

				<div className="buttons-container">
					<Link to="/study" className="study">
						<img src={studyIcon} alt="Estudar"/>
						Estudar
					</Link>

					<Link to="/give-classes" className="give-classes">
						<img src={giveClassesIcon} alt="Dar aulas"/>
						Dar aulas
					</Link>
				</div>

				<span className="total-connections">
					Total de {totalConnections} conexões já realizadas
					<img src={purplerHeartIcon} alt="Coração roxo"/>
				</span>

			</div>
		</div>
	)
}

export default Landing;