import axios from 'axios'
import useAxiosWithToken from '../hooks/useAxioswithToken'
import { ICategory } from '../interfaces/category.interface'
import URLBASE from './urlConstants'

const URL_API = `${URLBASE}/category`
const URL_API_BY_NAME = `${URLBASE}/category/name`
const URL_API_POST = `${URLBASE}/category/create`

// const token = localStorage.getItem('token')

// const config = {
// 	headers: {
// 		'Content-Type': 'application/json',
// 		Authorization: `Bearer ${token}`,
// 	},
// }

const axiosWithToken = useAxiosWithToken()

async function getData() {
	try {
		const response = await axios.get(URL_API)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

async function getDataByName(name: string) {
	try {
		const response = await axios.get(URL_API_BY_NAME + '/' + name)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

async function postData(categoryObject: ICategory) {
	try {
		const response = await axiosWithToken.post(URL_API_POST, categoryObject)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

const deleteCategory = async (id: string) => {
	try {
		const response = await axiosWithToken.delete(URL_API + '/' + id)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

const updateCategory = async (id: string, data: any) => {
	try {
		const response = await axiosWithToken.put(URL_API + '/' + id, data)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export default {
	getData,
	postData,
	deleteCategory,
	getDataByName,
	updateCategory,
}
