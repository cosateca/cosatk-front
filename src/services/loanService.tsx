import axios from 'axios'
import { ErrorCreateLoan } from '../constants/errorConstants'
import useAxiosWithToken from '../hooks/useAxioswithToken'
import URLBASE from './urlConstants'

const axiosWithToken = useAxiosWithToken()

const API_URL = `${URLBASE}/loans`

const getLoans = async (): Promise<any> => {
	try {
		const response = await axios.get(API_URL)

		return response.data
	} catch (error) {
		console.log(error)
	}
}

const getLoansByUser = async (id: string): Promise<any> => {
	try {
		const response = await axios.get(API_URL + '/userIdUsers/' + id)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

const returnLoan = async (id: string): Promise<any> => {
	try {
		const response = await axios.patch(API_URL + '/' + id)

		return response.data
	} catch (error) {
		console.log(error)
	}
}

const createLoan = async (data: any): Promise<any> => {
	try {
		const response = await axiosWithToken.post(API_URL + '/create', data)

		return response.data
	} catch (error) {
		console.log(error)
		throw new Error(ErrorCreateLoan)
	}
}

const updateLoan = async (id: string, data: any) => {
	try {
		const response = await axios.put(API_URL + '/' + id, data)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

const updateCheckedout = async (id: string, data: any) => {
	try {
		const response = await axios.patch(API_URL + '/checked_out/' + id, data)
		return response.data
	} catch (error) {
		throw new Error(`El prèstec no està actiu`)
	}
}

export default {
	getLoans,
	returnLoan,
	createLoan,
	getLoansByUser,
	updateLoan,
	updateCheckedout,
}
