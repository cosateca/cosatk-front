import axios from 'axios'
import {
	ErrorDeleteArticle,
	ErrorGetArticle,
} from '../constants/errorConstants'
import useAxiosWithToken from '../hooks/useAxioswithToken'
import { IArticle } from '../interfaces/article.interface'
import URLBASE from './urlConstants'

const API_URL_CREATE = `${URLBASE}/article/create`
const API_URL = `${URLBASE}/article`
const API_URL_DELETEBYCODE = `${URLBASE}/article/deleteByCode`

const axiosWithToken = useAxiosWithToken()
const token = localStorage.getItem('token')

const createArticle = async (data: IArticle, image: File): Promise<any> => {
	const formData = new FormData()
	formData.append('file', image)
	formData.append('code', data.code)
	formData.append('name', data.name)
	formData.append('short_description', data.short_description)
	formData.append('long_description', data.long_description)
	formData.append('serial_number', data.serial_number)
	formData.append('price_paid', data.price_paid)
	formData.append('value', data.value)
	formData.append('loan_fee', data.loan_fee)
	formData.append('loan_period', data.loan_period)
	formData.append('components', data.components)
	formData.append('care_information', data.care_information)
	formData.append('owned_by', data.owned_by)
	formData.append('donated_by', data.donated_by)
	formData.append('condition', data.condition)
	formData.append('brand', data.brand)
	formData.append('shown_on_website', data.shown_on_website)
	formData.append('categoryIdCategory', data.categoryIdCategory)
	formData.append('deposit', data.deposit)

	try {
		const response = await axios.post(API_URL_CREATE, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: `Bearer ${token}`,
			},
		})
		return response.data
	} catch (error: any) {
		console.log(error.response.statusText)
		throw new Error(error.response.statusText)
	}
}

const getArticles = async (): Promise<any[]> => {
	try {
		const response = await axiosWithToken.get(API_URL)

		return response.data
	} catch (error) {
		console.log(error)
		throw new Error(ErrorGetArticle)
	}
}

const deleteArticle = async (code: string): Promise<any> => {
	try {
		const response = await axiosWithToken.delete(
			API_URL + '/deleteByCode/' + code
		)
		return response.data
	} catch (error: any) {
		console.log(error)
		throw new Error(ErrorDeleteArticle)
	}
}

const getArticle = async (code: string): Promise<any> => {
	try {
		const response = await axios.get(API_URL_DELETEBYCODE + '/' + code)
		return response.data
	} catch (error: any) {
		console.log(error.message)
		throw new Error(ErrorGetArticle)
	}
}

const getArticleById = async (idArticle: string) => {
	try {
		const response = await axios.get(API_URL + '/' + idArticle)
		return response.data
	} catch (error) {
		console.log(error)
		throw new Error(ErrorGetArticle)
	}
}

const articleIdFromCode = async (code: string) => {
	try {
		const response = await axios.get(API_URL + '/findbycode/' + code)
		return response.data
	} catch (error) {
		console.log(error)
		throw new Error(ErrorGetArticle)
	}
}

const updateArticle = async (id: string, data: any) => {
	try {
		const response = await axiosWithToken.put(API_URL + '/' + id, data)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

const getArticlesByName = async (name: string) => {
	try {
		const response = await axios.get(API_URL + '/name/' + name)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export default {
	getArticles,
	createArticle,
	deleteArticle,
	getArticle,
	articleIdFromCode,
	getArticleById,
	updateArticle,
	getArticlesByName,
}
