import axios from 'axios'
import URLBASE from '../../services/urlConstants'
import { ILoans } from '../../interfaces/loans.interface'

const URL_API_GET = `${URLBASE}/loans`
const URL_API_POST = `${URLBASE}/loans/create`
// const URL_API_PUT = `${URLBASE + `${idLoans}`}/loans/`


export const getLoanRequest = async () => {

    return await axios.get(URL_API_GET)
}



