import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Já vem por padrão no expo
import { Ionicons } from 	'@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
	return (
		<Navigator
		// estilizando a tab
		tabBarOptions={{
			style: {
				// sombra no android *removendo*
				elevation: 0,
				// sombra no ios *removendo*
				shadowOpacity: 0,
				height: 64
			},
			tabStyle: {
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center'
			},
			iconStyle: {
				flex: 0,
				width: 20,
				height: 20
			},
			labelStyle: {
				fontFamily: 'Archivo_700Bold',
				fontSize: 13,
				marginLeft: 16,
			},
			inactiveBackgroundColor: '#fafafc',
			activeBackgroundColor: '#ebebf5',
			inactiveTintColor: '#c1bccc',
			activeTintColor: '#32264d',
		}}
		
		>
			<Screen 
				name="TeacherList"
				component={TeacherList} 
				options={{
					// Texto que a tab irá ter
					tabBarLabel: 'Proffys',
					tabBarIcon: ({ color, size, focused }) => {
						return (
							<Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
							// Se tiver selecionado 'focused' a cor sera '#8257e5' se não a cor padrão
						);
					}
				}}
			/>

			<Screen 
				name="Favorites" 
				component={Favorites} 
				options={{
					// Texto que a tab irá ter
					tabBarLabel: 'Favorites',
					tabBarIcon: ({ color, size, focused }) => {
						return (
							// Se tiver selecionado 'focused' a cor sera '#8257e5' se não a cor padrão
							<Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />
						);
					}
				}}
			/>
		</Navigator>
	);
}

export default StudyTabs;