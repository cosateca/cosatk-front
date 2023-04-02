import axios from 'axios'
import useAxiosWithToken from '../hooks/useAxioswithToken'
import { IUser } from '../interfaces/user.interface'
import URLBASE from './urlConstants'

const API_URL_USER = `${URLBASE}/user`
const API_URL = `${URLBASE}/auth/register`
const API_URL_LOGIN = `${URLBASE}/auth/login`

const axiosWithToken = useAxiosWithToken()

export const registerUser = async (data: any): Promise<any> => {
	try {
		const response = await axios.post(API_URL, data)
		return response.data
	} catch (error) {
		console.log(error)
		throw new Error(`Error sin determinar`)
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
		const response = await axiosWithToken.post(API_URL_USER, userDto)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export const getAllUsers = async () => {
	try {
		const response = await axiosWithToken.get(API_URL_USER)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export const getUsersByName = async (name: string) => {
	try {
		const response = await axiosWithToken.get(
			API_URL_USER + '/firstname/' + name
		)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export const deleteUser = async (id: string) => {
	try {
		const response = await axiosWithToken.delete(API_URL_USER + '/' + id)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export const updateUser = async (id: string, data: any) => {
	try {
		const response = await axiosWithToken.put(API_URL_USER + '/' + id, data)
		return response.data
	} catch (error) {
		console.log(error)
	}
}
