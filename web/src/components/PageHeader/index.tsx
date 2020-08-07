import React from 'react'
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';


// 🎯 Definindo o formato das tipagem de um objeto com typescript
interface PageHeaderProps {
	// recebendo um title que é uma string e é obrigatório
	title: string;
	// 🎯 ? => significa que a propriedade não é obrigatória
	description?:string;
}

// 🎯 Fazendo com com o componente saiba que se deve usar a propriedade definida acima
// 🎯 Se tem um componente 'PageHeader' ele é um 'FunctionComponent' e as props que ele tem é 'PageHeaderProps'
const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
	return(
		<header className="page-header">
			<div className="top-bar-container">
				<Link to="/">
					<img src={backIcon} alt="Voltar"/>
				</Link>
				<img src={logoImg} alt="Proffy"/>
			</div>

			<div className="header-content">
				<strong>{props.title}</strong>

				{/* 🎯 Se description existir  então  mostrar description */}
				{ props.description && <p>{props.description}</p> }

				{props.children}
			</div>
		</header>
	);
}

export default PageHeader;