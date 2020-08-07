import React, { TextareaHTMLAttributes } from 'react';

import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: string;
	label: string;

}

// 🎯 Textarea é do tipo 'React Function Component'
// 	onde é passado um generic que o os parâmetro de 
// 		tipagem onde será dito qual as propriedade que ele irá ter
// 🎯 componente com propriedades típadas
const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
	return (
		<div className="textarea-block">
			<label htmlFor={name}>{label}</label>
			<textarea id={name} {...rest} />
		</div>
	);
}

export default Textarea;