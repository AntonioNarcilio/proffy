import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {

	const [teachers, setTeachers] = useState([]);
	const [isFilterVisible, setIsFilterVisible] = useState(false);
	const [favorites, setFavorites] = useState<number[]>([]);

	// Criando estados
	const [subject, setSubject] = useState('');
	const [week_day, setWeekDay] = useState('');
	const [time, setTime] = useState('');

	
	function loadFavorites() {
		AsyncStorage.getItem('favorites').then(response => {
			if (response) {
				const favoriteTeachers = JSON.parse(response);
				const favoriteTeachersId = favoriteTeachers.map((teacher: Teacher) => {
					return teacher.id;
				})
				// buscando no banco de dados se existe favoritos
				setFavorites(favoriteTeachersId);
			}
		});
	}

	// Diferente do useEffect (react) que carregar assim que o 
	// 	usuário entrar na tela o useFocusEffect (@react-navigation/native)
	//  	carrega assim que a tela entra em foco
	useFocusEffect(() => {
		loadFavorites();
	});

	function handleToggleFiltersVisible(){
		// Se 'isFilterVisible' estiver como false setar como true
		setIsFilterVisible(!isFilterVisible);
	}

	async function handleFilterSubmit() {
		loadFavorites();

		const response = await api.get('classes', {
			params: {
				subject,
				week_day,
				time,
			}
		});

		// Fechando o filtro quando o usuário der um submit
		setIsFilterVisible(false)

		setTeachers(response.data);
	}

	return (
		<View style={styles.container} >
			<PageHeader 
				title="Proffys disponíveis" 
				headerRight={(
					<BorderlessButton onPress={handleToggleFiltersVisible}>
						<Feather name='filter' size={20} color='#fff' />
					</BorderlessButton>
				)}
			>
				{ isFilterVisible && (
					<View style={styles.searchForm}>
						<Text style={styles.label}>Matéria</Text>
							<TextInput
								style={styles.input}
								value={subject}
								// pegando o texto digitado pelo usuário
								onChangeText={text => setSubject(text)}
								placeholder='Qual a matérial'
								placeholderTextColor='#c1bccc'
							/>

						<View style={styles.inputGroup}>
							<View style={styles.inputBlock}>
								<Text style={styles.label}>Dia da semana</Text>
								<TextInput
									style={styles.input}
									value={week_day}
									// pegando o texto digitado pelo usuário
									onChangeText={text => setWeekDay(text)}
									placeholder='Qual o dia?'
									placeholderTextColor='#c1bccc'
								/>
							</View>

							<View style={styles.inputBlock}>
								<Text style={styles.label}>Horário</Text>
								<TextInput
									style={styles.input}
									value={time}
									// pegando o texto digitado pelo usuário
									onChangeText={text => setTime(text)}
									placeholder='Qual o horário?'
									placeholderTextColor='#c1bccc'
								/>
							</View>
						</View>

						<RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
							<Text style={styles.submitButtonText}>Filtrar</Text>
						</RectButton>

					</View>
				)}
			</PageHeader>

			<ScrollView 
				style={styles.teacherList}
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
			> 
				{/*  Sempre que se faz um 'map' tem que passar uma key */}
				{teachers.map((teacher: Teacher) => {
					return (
						<TeacherItem 
							key={teacher.id} 
							teacher={teacher} 
							addedFavorites={favorites.includes(teacher.id)}
						/>
					)
				})}
			</ScrollView>
		</View>
	);
}

export default TeacherList;