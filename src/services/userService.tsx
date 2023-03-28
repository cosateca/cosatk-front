import axios from 'axios'
import { ICategory } from '../interfaces/category.interface'
import { IUser } from '../interfaces/user.interface'
import URLBASE from './urlConstants'

const API_URL_USER = `${URLBASE}/user`
const API_URL = `${URLBASE}/auth/register`
const API_URL_LOGIN = `${URLBASE}/auth/login`

export const registerUser = async (data: any): Promise<any> => {
	try {
		const response = await axios.post(API_URL, data)
		return response
	} catch (error) {
		console.log(error)
	}
}
export const loginUser = async (data: { email: string; password: string }) => {
	try {
		const response = await axios.post(API_URL_LOGIN, data)
		const { token } = response.data
		localStorage.setItem('token', token)
		//fill useAuth() with user values
		return response.data
	} catch (error) {
		console.log(error)
		return error
	}
}
export const findUserById = async (id: string) => {
	try {
		const response = await axios.get(API_URL_USER + '/' + id)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export const createUserFromDashboard = async (userDto: IUser) => {
	try {
		//Format to YYYY-MM-DD
		const birthDate = userDto.birth_date
			? new Date(userDto.birth_date).toISOString().slice(0, 10)
			: undefined
		const userDtoFormatted = { ...userDto, birth_date: birthDate }

		const response = await axios.post(API_URL_USER, userDtoFormatted)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export const getAllUsers = async () => {
	try {
		const response = await axios.get(API_URL_USER)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export const getUsersByName = async (name: string) => {
	try {
		const response = await axios.get(API_URL_USER + '/firstname/' + name)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export const deleteUser = async (id: string) => {
	try {
		const response = await axios.delete(API_URL_USER + '/' + id)
		return response.data
	} catch (error) {
		console.log(error)
	}
}
