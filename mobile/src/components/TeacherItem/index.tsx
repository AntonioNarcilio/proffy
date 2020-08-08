import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles';

function TeacherItem() {
	return (
		<View style={styles.container}>
			<View style={styles.profile}>
				<Image
					// 🎯 No react-native imagens externas/url não aparecem até
					// 			que seja definido uma altura e largura
					style={styles.avatar}
					source={{ uri: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80' }}
				/>

				<View style={styles.profileInfo}>
					<Text style={styles.name}>Karla Fernandes</Text>
					<Text style={styles.subject}>Matemática</Text>
				</View>
			</View>

			<Text style={styles.bio}>
				Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. 
				{'\n'}
				Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
			</Text>

			<View style={styles.footer}>
				<Text style={styles.price}>
					Preço/hora {'  '}
					<Text style={styles.priceValue}>R$ 20,00</Text>
				</Text>

				<View style={styles.buttonContainer}>
					<RectButton style={[styles.favoriteButton, styles.addFavorite]}>
						{/* <Image source={heartOutlineIcon} /> */}
						<Image source={unFavoriteIcon} />
					</RectButton>

					<RectButton style={styles.contactButton}>
						<Image source={whatsappIcon} />
						<Text style={styles.contactButtonText}>Entrar em contato</Text>
					</RectButton>

				</View>
			</View>
		</View>
	);
}

export default TeacherItem;