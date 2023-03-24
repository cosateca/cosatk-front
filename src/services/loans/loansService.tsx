import axios from 'axios'
import URLBASE from '../../services/urlConstants'
import { ILoans } from '../../interfaces/loans.interface'

const URL_API_GET = `${URLBASE}/loans`
const URL_API_POST = `${URLBASE}/loans/create`
// const URL_API_PUT = `${URLBASE + `${idLoans}`}/loans/`


export const getLoanRequest = async () => {

    return await axios.get(URL_API_GET)
}

async function getData() {
	try {
		const response = await axios.get(URL_API_GET)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

async function postData(loansObject: ILoans) {
	try {
		const response = await axios.post(URL_API_POST, loansObject)
		return response.data
	} catch (error) {
		console.log(error)
	}
}
async function putData(loansObject:ILoans){
    try {
        const response = await axios.put(URL_API_POST, loansObject)
    } catch (error) {
        
    }
}

export default { getData, postData }
