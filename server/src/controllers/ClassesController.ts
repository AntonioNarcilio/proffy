import { Request, Response } from 'express'

import db from '../database/connection';

import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
	week_day: number;
	from: string;
	to: string;
}

export default class ClassesController {

	// 🎯 Listagem das aulas
	async index(request: Request, response: Response) {
		const filters = request.query;

		const subject = filters.subject as string;
		const week_day = filters.week_day as string;
		const time = filters.time as string;

		// 🎯 Se usuário não informou 'dia da semana' ou 'matéria'
		// 		ou não informou o horário que marcação da aula
		if(!filters.week_day || !filters.subject || !filters.time) {
			return response.status(400).json({
				error: '🤔 Missing filters to search classes'
			})
		}

		const timeInMinutes = convertHourToMinutes(time);

		// 🎯 Filtro de pesquisa por: Materia, Dia e Hora
		const classes = await db('classes')
			.whereExists(function() {
				this.select('class_schedule.*')
					.from('class_schedule')
					.whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
					.whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
					// verificando se o prof. trabalha antes ou igual ao horário passado no filter
					.whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
					// Verificando o horário que o prof. para de trabalhar
					.whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
			})
			// Listar aulas da matéria passado em 'filters.subject'
			.where('classes.subject', '=', subject)
			// 🎯  Verificando se o 'user_id' na tabela classes é igual
			// 	 ao id presente na tabela 'users'
			.join('users', 'classes.user_id', '=', 'users.id')
			// 🎯  Selecionando todos os dados da tabela 'classes' e 'users'
			.select(['classes.*', 'users.*']);

		return response.json(classes);

	}


	async create(request: Request, response: Response) {
		const {
			name,
			avatar,
			whatsapp,
			bio,
			subject,
			cost,
			schedule
		} = request.body;
	
		// 🎯 Esquema transaction
		const trx = await db.transaction();
	
		try {
			const insertedUserIds = await trx('users').insert({
				name,
				avatar,
				whatsapp,
				bio
			});
		
			const user_id = insertedUserIds[0];
		
			const insertedClassesIds =  await trx('classes').insert({
				subject,
				cost,
				user_id,
			});
		
			const class_id = insertedClassesIds[0];
		
			const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
				return {
					class_id,
					week_day: scheduleItem.week_day,
					from: convertHourToMinutes(scheduleItem.from),
					to: convertHourToMinutes(scheduleItem.to)
				};
			});
		
			await trx('class_schedule').insert(classSchedule);
		
			// 🎯 Só aqui que os dados serão inseridos no db
			//  	caso todos os procedimentos acima não retorne um erro se quer
			await trx.commit();
		
			return response.status(201).send();
		}
		catch (err) {
			// 🎯 Desfazer alterações no db
			await trx.rollback();
	
			return response.status(400).json({
				error: '⚠️ Unexpected error while creating new class'
			})
		}
		
	}
}