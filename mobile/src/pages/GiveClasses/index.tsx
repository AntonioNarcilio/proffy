import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';

function GiveClasses() {

	// Navegação
	const { goBack } = useNavigation();

	function handleNavigationBack(){
		goBack();
	}
 


	return (
	
		<View style={styles.container}>

			{/* 🎯  Toda vex que forma utilizar um background deve-se passar o tamanho 
								que ele irá ocupar na tela 
					
					🎯 resizeMode => O ImageBackground so aceita via tag e não via css essa estilização
			*/}
			<ImageBackground 
				resizeMode="contain" 
				source={giveClassesBgImage} 
				style={styles.content}
			>
				<Text style={styles.title}>Quer ser um Proffy?</Text>
				<Text style={styles.description}>
					Para começar, você precisa de cadastrar como professor na nossa plataforma web.
				</Text>

					
			</ImageBackground>

			<RectButton onPress={handleNavigationBack} style={styles.okButton}>
				<Text style={styles.okButtonText}>Tudo bem</Text>
			</RectButton>

		</View>

	);
}

export default GiveClasses;