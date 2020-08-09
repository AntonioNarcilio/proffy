import axios from 'axios';

const api = axios.create({
	// 🎯 Copiar o endereço/ip utilizado no expo 'LAN'
	// ex: exp://192.168.100.5:19000 => Opção LAN
	// 			e substituir 'exp' por http e 
	// 			a porta utilizada no expo pela porta da api
	baseURL: 'http://192.168.100.5:3333'
});

export default api;