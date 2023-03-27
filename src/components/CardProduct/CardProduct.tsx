import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import product from '../../assets/images/picture.png'
import * as blobUtil from 'blob-util'
import { useEffect, useState } from 'react'
import { getArticleImage } from '../../services/HomePage/homeService'
import { Link } from 'react-router-dom'

export type Article = {
	id: string
	name: string
	short_description: string
	longDesc: string
	serial: string
	pricePaid: number
	value: number
	image: Blob
	loanFee: number
	loanPeriod: number
	components: string
	careInfo: string
	ownedBy: string
	donated_by: string
	condition: string
	brand: string
	shownOnWeb: string
}

const CardProduct = ({ article }: any) => {
	const [image, setImage] = useState<any>(null)

	useEffect(() => {
		async function getImg() {
			const response = await getArticleImage(article.idArticle)

			setImage(response)
		}
		getImg()
	}, [])

	return (
	<Link  to='/detall'> 	<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="240"
					image={image && image.src}
					alt="article"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{article.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{article.short_description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
		</Link>
	)

}

export default CardProduct
