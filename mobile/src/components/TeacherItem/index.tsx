import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles';
import api from '../../services/api';

export interface Teacher {
	id: number;
	avatar: string;
	bio: string;
	cost: number;
	name: string;
	subject: string;
	whatsapp: string;
}

interface TeacherItemProps {
	teacher: Teacher;
	addedFavorites: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, addedFavorites }) => {
	
	const [isAddedFavorite, setIsAddedFavorite] = useState(addedFavorites);

	// Abrindo conversa mo whats
	function handleLinkWhatsapp(){
		// Incrementando nova conexão entre proffy e aluno
		api.post('connections', {
			user_id: teacher.id,
		})

		Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
	}

	async function handleToggleFavorite() {
		const favorites = await AsyncStorage.getItem('favorites');

		let favoritesArray = [];

			if (favorites) {
				favoritesArray = JSON.parse(favorites);
			}

		if (isAddedFavorite) {
			const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
				return teacherItem.id === teacher.id;
			});

			favoritesArray.splice(favoriteIndex, 1);

			setIsAddedFavorite(false)
		} 
		else {
			favoritesArray.push(teacher);

			setIsAddedFavorite(true)
		}

		await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
	}
	
	return (
		<View style={styles.container}>
			<View style={styles.profile}>
				<Image
					// 🎯 No react-native imagens externas/url não aparecem até
					// 			que seja definido uma altura e largura
					style={styles.avatar}
					source={{ uri: teacher.avatar }}
				/>

				<View style={styles.profileInfo}>
					<Text style={styles.name}>{teacher.name}</Text>
					<Text style={styles.subject}>{teacher.subject}</Text>
				</View>
			</View>

			<Text style={styles.bio}>{teacher.bio}</Text>

			<View style={styles.footer}>
				<Text style={styles.price}>
					Preço/hora {'  '}
					<Text style={styles.priceValue}>R$ {teacher.cost}</Text>
				</Text>

				<View style={styles.buttonContainer}>
					<RectButton 
						onPress={handleToggleFavorite}
						style={[
							styles.favoriteButton, 
							// if
							isAddedFavorite ? styles.addFavorite : {},
							]}
						>
						
						{ isAddedFavorite 
							// Se estiver favoritado
							? <Image source={unFavoriteIcon} />
							// Se não estiver favoritado
							: <Image source={heartOutlineIcon} /> 
						}
						
						
						
					</RectButton>

					<RectButton onPress={handleLinkWhatsapp} style={styles.contactButton}>
						<Image source={whatsappIcon} />
						<Text style={styles.contactButtonText}>Entrar em contato</Text>
					</RectButton>

				</View>
			</View>
		</View>
	);
}

export default TeacherItem;