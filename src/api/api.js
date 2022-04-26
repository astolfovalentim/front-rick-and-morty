export const Api = {
	baseUrl: "https://rick-and-morty-server.herokuapp.com",
	keyJwt: localStorage.getItem('keyLogin'),

	// characters
	createCharacterUrl: () => Api.baseUrl + "/characters/create",
	readAllCharactersUrl: (offset) => Api.baseUrl + "/characters?limit=8&offset="+offset,
	readCharacterByIdUrl: (id) => Api.baseUrl + "/characters/find/" + id,
	readCharacterByNameUrl:(name)=>Api.baseUrl + "/characters/search?name="+name,
	updateCharacterUrl: (id) => Api.baseUrl + "/characters/update/" + id,
	deleteCharacterUrl: (id) => Api.baseUrl + "/characters/delete/" + id,
	deleteAllCharactersUrl: () => Api.baseUrl + "/characters/",

	// login
	makeLoginUrl:()=>Api.baseUrl + "/auth/login",
	
	// Users
	createUserUrl:()=>Api.baseUrl + "/users/create",
	readAllUsersUrl:()=>Api.baseUrl + "/users",

	// Create
	buildApiPostRequest: (url, body) => {
		return fetch(url, {
			method: "POST",
			headers: new Headers({
				"Content-type": "application/json",
			}),
			body: JSON.stringify(body),
		});
	},
	// CreateWithAuth
	buildApiPostAuthRequest: (url, body) => {
		return fetch(url, {
			method: "POST",
			headers: new Headers({
				"Content-type": "application/json",
				'Authorization': 'Bearer ' + Api.keyJwt,
			}),
			body: JSON.stringify(body),
		});
	},

	// ReadAll
	buildApiGetRequest: (url) => {
		return fetch(url, {
			method: "GET",
			headers: new Headers({
				"Content-type": "application/json",
				'Authorization': 'Bearer ' + Api.keyJwt,
			}),
		});
	},

	// UpdateById
	buildApiPutRequest: (url, body) => {
		return fetch(url, {
			method: "PUT",
			headers: new Headers({
				"Content-type": "application/json",
				'Authorization': 'Bearer ' + Api.keyJwt,
			}),
			body: JSON.stringify(body),
		});
	},

	// DeleteAll
	buildApiDeleteRequest: (url) => {
		return fetch(url, {
			method: "DELETE",
			headers: new Headers({
				"Content-type": "application/json",
				'Authorization': 'Bearer ' + Api.keyJwt,
			}),
		});
	},
};
