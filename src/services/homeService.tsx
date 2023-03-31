import axios from 'axios'
import useAxiosWithToken from '../hooks/useAxioswithToken'
import URLBASE from './urlConstants'

const API_URL = `${URLBASE}/article`
const API_URL_IMG = `${URLBASE}/article/image/`

const axiosWithToken = useAxiosWithToken()

export const getArticles = async () => {
	const response = await axiosWithToken.get(API_URL)
	return response.data
}

export const getArticlesShownOnWeb = async () => {
	const response = await axiosWithToken.get(API_URL + '/shown_on_website')
	console.log(response.data)
	return response.data
}

export const getArticleImage = async (id: string) => {
	const response = await axiosWithToken.get(API_URL_IMG + id, {
		responseType: 'arraybuffer',
	})

	const blob = new Blob([response.data], { type: 'image/*' })
	const img = new Image()
	img.src = URL.createObjectURL(blob)
	return img
}
