/* eslint-disable no-mixed-spaces-and-tabs */
// import { Container, Box, Typography } from '@mui/material'
// import { useState, useEffect } from 'react'
// import Footer from '../../../components/Footer/Footer'
// import Header from '../../../components/Header/Header'
// import MenuCatalogue from '../../../components/MenuCatalogue/MenuCatalogue'
// import { getArticleImage, getArticles } from '../../../services/HomePage/homeService'
// import { useParams } from 'react-router-dom'
// import { Article} from '../../../components/CardProduct/CardProduct'


// const Detall = ( {article} : any) => {
// 	/*const [articles, setArticle] = useState<Article[]>([]) */
//     // const [image, setImage] = useState<any>(null)
// 	// useEffect(() => {
// 	// 	async function getImg() {
// 	// 		const response = await getArticleImage(article.idArticle)

// 	// 		setImage(response)
// 	// 	}
// 	// 	getImg()
// 	// }, [])
// 	const [articles, setArticle] = useState<Article[]>([])
//     useEffect( () => { 
// 		async function loadArticle() {
// 			const response = await getArticles()
// 			console.log(response)			
// 		}
// 		loadArticle()

// 	} , [])


// 	return (
// 		<>
// 			<Header />
// 			<MenuCatalogue />
// 			<Container>
// 				<>
// 					<Box
// 						display={{ xs: 'block', sm: 'flex' }}
// 						overflow-y={{ xs: 'hidden' }}
// 						sx={{
// 							overflow: { xs: 'scroll', sm: 'scroll' },
// 						}}
// 					>
// 						<section>
// 							<Container
// 								sx={{
// 									padding: { xs: '25px', sm: '50px' },
// 									width: '100vw',
// 									height: '100vh',
// 								}}
// 							>
// 								<Typography variant="h1">Detall Article</Typography>
// 								<Box
// 									sx={{
// 										marginTop: '20px',
// 										display: 'flex',
// 										flexDirection: { xs: 'column', sm: 'row' },
// 										alignItems: 'center',
// 										justifyContent: 'space-between',
// 										gap: '50px',
// 										bgcolor: '#67B7E1',
// 										padding: '20px 50px',
// 										width: '80%',
// 									}}
// 								>
// 									<Box>
// 										<img src='' alt="image bike" />
// 									</Box>
// 									<Box>
// 										<p>
// 											<span> Nom </span>cipciop
// 										</p>
// 										<p>
// 											<span>Categoria: </span>Nens petits
// 										</p>
// 										<p>
// 											<span>Afegit el: </span>20/10/2023
// 										</p>
// 										<p>
// 											<span>Codi: </span>1234
// 										</p>
// 										<p>
// 											<span>Número de serie: </span>0001
// 										</p>
// 										<p>
// 											<span>Condicio: </span>Bona
// 										</p>
// 										<p>
// 											<span>Preu pagat: </span>Bianchi
// 										</p>
// 										<p>
// 											<span>Marca: </span>200€
// 										</p>
// 										<p>
// 											<span>Valor: </span>100€
// 										</p>
// 										<p>
// 											<span>Preu de lloguer: </span>5€
// 										</p>
// 										<p>
// 											<span>Període de lloguer: </span>7 dies
// 										</p>
// 										<p>
// 											<span>Components: </span>Comproveu la pressió dels
// 											pneumátics
// 										</p>
// 										<p>
// 											<span>Informació de cures: </span>Will Smith
// 										</p>
// 										<p>
// 											<span>Propietar de: </span>Chris Rock
// 										</p>
// 										<p>
// 											<span>Donat per: </span>Jada Pinkett Smith
// 										</p>
// 										<p>
// 											<span>Descripció llarga: </span>mitjá de transport que té
// 											dures rodes, amb pedals que permeten transmetre el
// 											moviment a la roda del darrere a través d´una cadena, un
// 											pinyó i un plat
// 										</p>
// 										<p>
// 											<span>Descripció curta: </span>bicicleta infantil fins a 3
// 											anys
// 										</p>
// 									</Box>
// 								</Box>
// 							</Container>
// 						</section>
// 					</Box>
// 				</>
// 			</Container>
// 			<Footer />
// 		</>
// 	)
// }

// export default Detall


import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box, CardActionArea, Container } from '@mui/material'
import product from '../../assets/images/picture.png'
import * as blobUtil from 'blob-util'
import { useEffect, useState } from 'react'
import { getArticleImage } from '../../../services/HomePage/homeService'
import { Link } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import MenuCatalogue from '../../../components/MenuCatalogue/MenuCatalogue'
import Footer from '../../../components/Footer/Footer'

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

const detall = ({ article }: any) => {
	const [image, setImage] = useState<any>(null)

	useEffect(() => {
		async function getImg() {
			const response = await getArticleImage(article.idArticle)

			setImage(response)
		}
		getImg()
	}, [])

	return (
		<>
		 			<Header />
					<MenuCatalogue />
		 			<Container>
						<>
		 					<Box
		 						display={{ xs: 'block', sm: 'flex' }}
							overflow-y={{ xs: 'hidden' }}
		 						sx={{
									overflow: { xs: 'scroll', sm: 'scroll' },
						}}
		 					>
							<section>
		 							<Container
		 								sx={{
		 									padding: { xs: '25px', sm: '50px' },
										width: '100vw',
		 									height: '100vh',
		 								}}
									>
										<Typography variant="h1">Detall Article</Typography>
										<Box
		 									sx={{
												marginTop: '20px',
											display: 'flex',
		 										flexDirection: { xs: 'column', sm: 'row' },
		 										alignItems: 'center',
												justifyContent: 'space-between',
		 										gap: '50px',
											bgcolor: '#67B7E1',
												padding: '20px 50px',
												width: '80%',
	 									}}
		 								>
	 									<Box>
		 										<img src={image && image.src} alt="image bike" />
		 									</Box>
											<Box>
		 										<p>
		 											<span> Nom </span> ds
												</p>
		 										<p>
		 											<span>Categoria: </span>Nens petits
													 </p>
											<p>
													<span>Afegit el: </span>20/10/2023
											</p>
		 										<p>
	 											<span>Codi: </span>1234
												</p>
		 										<p>
													<span>Número de serie: </span>0001
												</p>
		 										<p>
	 											<span>Condicio: </span>Bona
												</p>
		 										<p>
		 											<span>Preu pagat: </span>Bianchi
												</p>
		 										<p>
													<span>Marca: </span>200€
												</p>
												<p>
		 											<span>Valor: </span>100€
												</p>
		 										<p>
		 											<span>Preu de lloguer: </span>5€
		 										</p>
												<p>
													<span>Període de lloguer: </span>7 dies
		 										</p>
		 										<p>
													<span>Components: </span>Comproveu la pressió dels
		 											pneumátics
		 										</p>
		 										<p>
		 											<span>Informació de cures: </span>Will Smith
		 										</p>
											<p>
		 											<span>Propietar de: </span>Chris Rock
		 										</p>
	 										<p>
													<span>Donat per: </span>Jada Pinkett Smith
		 										</p>
	 										<p>
		 											<span>Descripció llarga: </span>mitjá de transport que té
													dures rodes, amb pedals que permeten transmetre el
		 											moviment a la roda del darrere a través d´una cadena, un
		 											pinyó i un plat
											</p>
											<p>
												<span>Descripció curta: </span>bicicleta infantil fins a 3
												anys
											</p>
											</Box>
									</Box>
									</Container>
								</section>
							</Box>
						</>
					</Container>
		 			<Footer />
		 		</>
	)

}

export default detall;
