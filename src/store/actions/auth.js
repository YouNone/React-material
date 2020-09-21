import axios from 'axios'
import { AUTH_SUCCESS, AUTH_LOGOUT } from './ActionTypes'

export function auth(email, password, isLogin) {
	return async dispatch => {
		const authData = {
			email,
			password,
			returnSecureToken: true
		}

		let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA7-lkNJqD7H-SchOHXiGnCvcDfMDhv5Cg'

		if (isLogin) {
			url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA7-lkNJqD7H-SchOHXiGnCvcDfMDhv5Cg'
		}

		const response = await axios.post(url, authData)
		const data = response.data
		// console.log(data);

		const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

		localStorage.setItem('token', data.idToken)
		localStorage.setItem('userId', data.localId)
		localStorage.setItem('expirationDate', expirationDate)

		const token = localStorage.getItem('token');
		if (token) {
			console.log("token", token);
		}

		dispatch(authSuccess(data.idToken))
		dispatch(autoLogout(data.expiresIn))
	}
}

export function autoLogout(time) {
	return dispatch => {
		setTimeout(() => {
			dispatch(logout())
		}, time * 1000)
	}
}

export function logout() {
	localStorage.removeItem('token')
	localStorage.removeItem('userId')
	localStorage.removeItem('expirationDate')
	return {
		type: AUTH_LOGOUT
	}
}

export function authSuccess(token) {
	return {
		type: AUTH_SUCCESS,
		token
	}
}