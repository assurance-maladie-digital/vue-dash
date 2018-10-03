import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3000/',
	timeout: 1000,
	withCredentials: false,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

export default instance;
