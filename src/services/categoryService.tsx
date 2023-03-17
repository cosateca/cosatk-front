import axios from 'axios'
import { ICategory } from '../interfaces/category.interface'
import URLBASE from './urlConstants'

const URL_API_GET = `${URLBASE}/api/v1/category`
const URL_API_POST = `${URLBASE}/api/v1/category/create`

async function getData() {
	try {
		const response = await axios.get(URL_API_GET)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

async function postData(categoryObject: any) {
	try {
		const response = await axios.post(URL_API_POST, categoryObject)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export default { getData, postData }
