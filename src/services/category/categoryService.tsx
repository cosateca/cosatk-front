import axios from 'axios'
import { ICategory } from '../../interfaces/category.interface'
import URLBASE from '../../services/urlConstants'


const URL_API_GET = `${URLBASE}/category`
const URL_API_POST = `${URLBASE}/category?category_name=$`
const URL_API_DELETE = `${URLBASE}/category`

// const URL_API_PUT = `${URLBASE + `${idLoans}`}/loans/`


export const getLoanRequest = async () => {

    return await axios.get(URL_API_GET)
}

export const getCategoryRequest = async (id:any) =>{
    return await axios.get(URL_API_GET, {params:{category_nama:''}})
 }

//  export const getCategoryRequest = await.get(URL_API_GET, {params:{category_name:10}})
//  getCategoryRequest.data.args
 


export const deleteCatagoryRequest = async (idCategory:ICategory) =>{
    return await axios.delete(URL_API_DELETE + `/${idCategory}`)
  }