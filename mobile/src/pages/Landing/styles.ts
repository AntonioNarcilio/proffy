import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {

		// ocupando todo espaço disponível da tela
		flex: 1,

		backgroundColor: '#8257E5',
		justifyContent: 'center',
		padding: 40
	},

	banner: {
		width: '100%',
		// redimensione a img proporcionalmente
		resizeMode: 'contain'
	},

	title: {
		fontFamily: 'Poppins_400Regular',
		color: '#FFF',
		fontSize: 20,
		lineHeight: 30,
		marginTop: 80,
	},

	titleBold: {
		fontFamily: 'Poppins_600SemiBold'
	},

	buttonsContainer: {
		// Deixando um botão do lado do outro
		flexDirection: 'row',

		marginTop: 40,
		// Cada botão em uma extremidade
		justifyContent: 'space-between'
	},

	button: {
		height: 150,
		width: '48%',
		backgroundColor: '#333',
		borderRadius: 8,
		padding: 24,
		justifyContent: 'space-between'
	},

	buttonPrimary: {
		backgroundColor: '#9871f5',
	},

	buttonSecondary: {
		backgroundColor: '#04d361'
	},

	buttonText: {
		fontFamily: 'Archivo_700Bold',
		color: '#FFF',
		fontSize: 18,
	},

	totalConnections: {
		fontFamily: 'Poppins_400Regular',
		color: '#d4c2ff',
		fontSize: 12,
		lineHeight: 20,
		maxWidth: 140,
		marginTop: 40,
	}

});

export default styles;