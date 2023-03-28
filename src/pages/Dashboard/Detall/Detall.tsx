/* eslint-disable no-mixed-spaces-and-tabs */
import { Container, Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import MenuCatalogue from '../../../components/MenuCatalogue/MenuCatalogue'
import {getArticleImage} from '../../../services/HomePage/homeService'
import {  useParams } from 'react-router-dom'

import { IArticle } from '../../../interfaces/article.interface'
import articleService from '../../../services/articleService'

const Detall = () => {
	const [article, setArticle] = useState<IArticle>()

	const [image, setImage] = useState<any>(null)

	const params = useParams()
	console.log(params)

	useEffect(() => {
		async function getImg() {
			if (params.id) {
				const response = await getArticleImage(params.id)
				console.log(response)
				setImage(response)
			}
		}

		getImg()
	}, [])

	//Bring article
	useEffect(() => {
		const loadDetall = async () => {
			if (params.id) {
				const response = await articleService.getArticleById(params.id)
				setArticle(response)
			}
		}
		loadDetall()
	}, [])

	return (
		<>
			<Header />
			<MenuCatalogue />
			<Container>
				<>
					<Box
						display={{ xs: 'block', sm: 'flex' }}
						
						sx={{
							overflow: { xs: 'scroll', sm: 'hidden' },
							justifyContent:'center'
						}}
					>
						<section>
							<Container
								sx={{
									padding: { xs: '25px', sm: '50px' },
									
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
										<img src={image && image.src} alt="image bike" style={{width: '200px', height:' 200px'}}/>
									</Box>
									<Box>
										<h1>{article?.name}</h1>
										<p>
											<span>Nom: </span>
											{article?.name && article?.name}
										</p>
										<p>
											<span>Categoria: </span>
											{article?.short_description && article?.short_description}
										</p>
										<p>
											<span>Afegit el:  </span>
											{article?.donated_by && article?.donated_by}
										</p>
										<p>
											<span>Codi: </span>
											{article?.code && article?.code}
										</p>
										<p>
											<span>Número de serie: </span>
											{article?.serial_number && article?.serial_number}
										</p>
										<p>
											<span>Condicio: </span>
											{article?.condition && article?.condition}
										</p>
										<p>
											<span>Preu pagat: </span>
											{article?.price_paid && article?.price_paid}
										</p>
										<p>
											<span>Marca: </span> 
											{article?.brand && article?.brand}
										</p>
										<p>
											<span>Valor: </span>
											{article?.value && article?.value}
										</p>
										<p>
											<span>Preu de lloguer: </span>
											{article?.loan_fee && article?.loan_fee}
										</p>
										<p>
											<span>Període de lloguer: </span>
										    {article?.loan_period && article?.loan_period}
										</p>
										<p>
											<span>Components: </span>
											{article?.components && article?.components}
										</p>
										<p>
											<span>Informació de cures: </span>
											{article?.care_information && article?.care_information}
										</p>
										<p>
											<span>Propietar de: </span>
											{article?.owned_by && article?.owned_by}
										</p>
										<p>
											<span>Donat per: </span>
											{article?.donated_by && article?.donated_by}
										</p>
										<p>
											<span>Descripció llarga: </span>
											{article?.long_description && article?.long_description}
										</p>
										<p>
											<span>Descripció curta: </span>
											{article?.short_description && article?.short_description}
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

export default Detall
