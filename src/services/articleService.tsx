import axios from 'axios'
import { IArticle } from '../interfaces/article.interface'
import { ICategory } from '../interfaces/category.interface'
import URLBASE from './urlConstants'

const API_URL_CREATE = `${URLBASE}/article/create`
const API_URL = `${URLBASE}/article`
const API_URL_DELETEBYCODE = `${URLBASE}/article/deleteByCode`

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
			},
		})
		return response.data
	} catch (error) {
		console.log(error)
	}
}

const getArticles = async (): Promise<any> => {
	try {
		const response = await axios.get(API_URL)

		return response.data
	} catch (error) {
		console.log(error)
	}
}

const deleteArticle = async (code: string): Promise<any> => {
	try {
		const response = await axios.delete(API_URL + '/deleteByCode/' + code)

		return response.data
	} catch (error) {
		console.log(error)
	}
}

const articleIdFromCode = async (code: string) => {
	try {
		const response = await axios.get(API_URL + '/codetoid/' + code)
		return response.data[0]
	} catch (error) {
		console.log(error)
	}
}

export default { getArticles, createArticle, deleteArticle, articleIdFromCode }
