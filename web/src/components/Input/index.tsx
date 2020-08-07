import React, { InputHTMLAttributes } from 'react';

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;

}

// 🎯 Input é do tipo 'React Function Component'
// 	onde é passado um generic que o os parâmetro de 
// 		tipagem onde será dito qual as propriedade que ele irá ter
// 🎯 componente com propriedades típadas
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
	return (
		<div className="input-block">
			<label htmlFor={name}>{label}</label>
			<input type="text" id={name} {...rest} />
		</div>
	);
}

export default Input;