/* eslint-disable no-mixed-spaces-and-tabs */
import { Container, Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import MenuCatalogue from '../../../components/MenuCatalogue/MenuCatalogue'
import { getArticleImage } from '../../../services/homeService'
import { useParams } from 'react-router-dom'

import { IArticle } from '../../../interfaces/article.interface'
import articleService from '../../../services/articleService'
import useAuth from '../../../hooks/useAuth'

const Detall = () => {
	const [article, setArticle] = useState<IArticle>()

	const [image, setImage] = useState<any>(null)

	const params = useParams()

	const { auth } = useAuth()

	//Bring image
	useEffect(() => {
		async function getImg() {
			if (params.id) {
				const response = await getArticleImage(params.id)
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
				<Box
					display={{ xs: 'block', sm: 'flex' }}
					overflow-y={{ xs: 'hidden' }}
				>
					<section>
						<Container
							sx={{
								padding: { xs: '25px', sm: '50px' },
								minWidth: { xs: '100%', md: '1200px' },
								width: '100%',
								height: '100%',
							}}
						>
							<Typography variant="h1">Detall article</Typography>
							<Box
								sx={{
									marginTop: '20px',
									display: 'flex',
									flexDirection: { xs: 'column', sm: 'row' },
									alignItems: 'center',
									justifyContent: 'space-between',
									gap: '50px',
									bgcolor: '#f9f9f9',
									padding: '20px 50px',
									width: '80%',
								}}
							>
								<Box>
									<img width={'300px'} src={image && image.src} alt="image" />
								</Box>
								<Box sx={{ width: '80%' }}>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
											alignItems: 'center',
										}}
									>
										<Typography variant="h1">{article?.name}</Typography>

										{auth?.email &&
											(article?.is_on_loan ? (
												<Box
													sx={{
														bgcolor: '#CF2E2E',
														width: '120px',
														height: '30px',
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
														color: '#FFFFFF',
													}}
												>
													No disponible
												</Box>
											) : (
												<Box
													sx={{
														bgcolor: '#50C878',
														width: '120px',
														height: '30px',
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
														color: '#FFFFFF',
													}}
												>
													Disponible
												</Box>
											))}
									</Box>

									<p>
										<em>
											{article?.short_description ?? article?.short_description}
										</em>
									</p>
									<p>
										<span>Codi: </span>
										{article?.code}
									</p>

									<p>
										<span>Condició: </span>
										{article?.condition ?? article?.condition}
									</p>
									<p>
										<span>Marca: </span>
										{article?.brand ?? article?.brand}
									</p>
									<p>
										<span>Preu de lloguer: </span>
										{article?.loan_fee ?? article?.loan_fee} €
									</p>
									<p>
										<span>Període de lloguer: </span>
										{article?.loan_period ?? article?.loan_period} dies
									</p>
									<p>
										<span>Components inclosos: </span>
										{article?.components ?? article?.components}
									</p>
									<p>
										<span>Informació de cures: </span>
										{article?.care_information ?? article?.care_information}
									</p>
									<p>
										<span>Descripció: </span>
										{article?.long_description ?? article?.long_description}
									</p>
								</Box>
							</Box>
						</Container>
					</section>
				</Box>
			</Container>
			<Footer />
		</>
	)
}

export default Detall
