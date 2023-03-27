import axios from 'axios'
import { ILoan } from '../interfaces/loans.interface'
import URLBASE from './urlConstants'

const API_URL = `${URLBASE}/loans`

const getLoans = async (): Promise<any> => {
	try {
		const response = await axios.get(API_URL)

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
		const response = await axios.post(API_URL + '/create', data)

		return response.data
	} catch (error) {
		console.log(error)
		throw new Error()
	}
}

export default { getLoans, returnLoan, createLoan }
