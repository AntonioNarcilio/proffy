import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';


function TeacherItem() {
	return (
		<article className="teacher-item">

			<header>
				<img src="https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
				alt="Carlos Alberto"/>
				<div>
					<strong>Carlos Alberto</strong>
					<span>Química</span>
				</div>
			</header>

			<p>
				Entusiasta das melhores tecnologias de química avançada.
				<br /> <br/>
				Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências
			</p>

			<footer>
				<p>
					Preço/hora
					<strong>RS 100,00</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="Whatsapp"/>
					Entrar em contato
				</button>
			</footer>

		</article>
	);
}

export default TeacherItem;