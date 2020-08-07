import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Dependência que vem junto com o pacote de navegação 'react-navigation...
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import LandingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from "../../assets/images/icons/heart.png"

function Landing() {

	// { navigate } => desestruturação
	const { navigate } = useNavigation();
	// Navegação
	function HandleNavigationToGiveClassesPage() {
		// Passando o nome que esta dentro de name={} em AppStack para definir a tela que irá navegar
		navigate('GiveClasses');
	}

	function handleNavigationToStudyPages() {		
		// Passando o nome que esta dentro de name={} em AppStack para definir a tela que irá navegar
		navigate('Study');
	}

	return (
			<View style={styles.container}>
				<Image source={LandingImg} style={styles.banner}/>

				<Text style={styles.title}>
					Seja bem-vindo(a), {'\n'}
					{/* A teg 'Text' é a unica no react-native que pode herda 
								as estilizações da outra teg 'Text' */}
					<Text style={styles.titleBold}>
						O que deseja fazer?
					</Text>
				</Text>

				<View style={styles.buttonsContainer}>
						<RectButton 
							onPress={handleNavigationToStudyPages}
							style={[styles.button, styles.buttonPrimary]}
						>
								<Image source={studyIcon} />

								<Text style={styles.buttonText}>Estudar</Text>
						</RectButton>

						<RectButton 
							onPress={HandleNavigationToGiveClassesPage} 
							style={[styles.button, styles.buttonSecondary]}
						>
								<Image source={giveClassesIcon} />

								<Text style={styles.buttonText}>Dar aulas</Text>
						</RectButton>
				</View>

				<Text style={styles.totalConnections}>
						Total de 285 conexões já realizadas {' '}
						<Image source={heartIcon} />
				</Text>

			</View>
		);
}

export default Landing;