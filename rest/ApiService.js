import HttpRequest from "./HttpRequest";

export default class ApiService {

	constructor() {
	}

	BASE_URL = 'https://stack-attack-bed.herokuapp.com';

	getChallenges() {
		return this.executeRequest(new HttpRequest(`${this.BASE_URL}/challenges`, 'GET', null))
	}

	executeRequest(httpRequest) {
		switch(httpRequest.httpMethod) {
			case 'GET':
				return fetch(httpRequest.endPointUrl);
			case 'POST':
				console.log('POST')
		}
	}
}
