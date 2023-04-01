import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, ListItemButton } from '@mui/material'
import product from '../../assets/images/picture.png'
import * as blobUtil from 'blob-util'
import { useEffect, useState } from 'react'
import { getArticleImage } from '../../services/homeService'
import { useNavigate } from 'react-router-dom'

const CardProduct = ({ article }: any) => {
	const [image, setImage] = useState<any>(null)

	const navigate = useNavigate()

	useEffect(() => {
		async function getImg() {
			const response = await getArticleImage(article.idArticle)
			setImage(response)
		}
		getImg()
	}, [])

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea onClick={() => navigate(`/detall/${article.idArticle}`)}>
				<ListItemButton>
					<CardMedia
						component="img"
						height="240"
						image={image && image.src}
						alt="article"
					/>
				</ListItemButton>

				<CardContent>
					<Typography gutterBottom variant="h6" component="div">
						{article.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{article.short_description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default CardProduct
