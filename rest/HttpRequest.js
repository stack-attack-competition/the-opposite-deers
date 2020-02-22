export default class HttpRequest {

	constructor(endPointUrl, httpMethod, payload) {
		this.endPointUrl = endPointUrl;
		this.httpMethod = httpMethod;
		this.payload = payload;
	}
}
