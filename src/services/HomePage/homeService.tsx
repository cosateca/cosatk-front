import axios from 'axios'
import URLBASE from '../urlConstants'

const API_URL = `${URLBASE}/article`
const API_URL_IMG = `${URLBASE}/article/image/`

export const getArticles = async () => {
	const response = await axios.get(API_URL)
	// console.log('prime: ' + response.data[0].image.data)
	// const updatedArticles = response.data.map((article: any) => {
	// 	const imageData = URL.createObjectURL(new Blob([article.image.data]))
	// 	return { ...article, image: { ...article.image, data: imageData } }
	// })
	// console.log('secu: ' + updatedArticles[0].image.data)
	// console.log('Respuesta Service: ' + response.data[0].image.data[1])

	// const blob = await response.data[0].image.data.blob()
	// const url = URL.createObjectURL(blob)
	// console.log('Esta es la urb blob del servicio: ' + url)
	// return url
	return response.data
}

export const getArticleImage = async (id: string) => {
	const response = await axios.get(API_URL_IMG + id, {
		responseType: 'arraybuffer',
	})

	const blob = new Blob([response.data], { type: 'image/*' })
	const img = new Image()
	img.src = URL.createObjectURL(blob)
	return img
}
