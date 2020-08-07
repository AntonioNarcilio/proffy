import React, { SelectHTMLAttributes } from 'react';

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	name: string;
	label: string;
	options: Array<{
		value: string;
		label: string;
	}>;
}

// 🎯 Select é do tipo 'React Function Component'
// 	onde é passado um generic que o os parâmetro de 
// 		tipagem onde será dito qual as propriedade que ele irá ter
// 🎯 componente com propriedades típadas
const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
	return (
		<div className="select-block">
			<label htmlFor={name}>{label}</label>
			<select value="" id={name} {...rest} >
				{/* Seleção padrão */}
				<option value="" disabled hidden>Selecione uma opção</option>

				{
					// Pegando as options e fazendo um map
					// 🎯 Percorrer as opções e retornar algo de dentro
					// 🎯 Para cada 'option' retornar algo
					options.map(option => {
					return <option key={option.value} value={option.value}>{option.label}</option>
				})
				}
			</select>
		</div>
	);
}

export default Select;