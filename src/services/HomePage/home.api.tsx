import axios from "axios"


const basehomeurl= 'http://localhost:3000/api/v1/article'

export const getArticles = async () => {
    return await axios.get(basehomeurl)
}