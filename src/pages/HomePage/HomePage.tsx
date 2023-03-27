/* eslint-disable no-mixed-spaces-and-tabs */
import {
	Container,
	Button,
	Box,
	Typography,
	AccordionActionsClasses,
} from '@mui/material'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CardProduct, { Article } from '../../components/CardProduct/CardProduct'
import CustomizedAccordions from '../../components/Accordion/Accordion'
import { useEffect, useState } from 'react'

import {
	getArticles,
	getArticleImage,
} from '../../services/HomePage/homeService'

import BannerHomePage from '../../components/BannerHomePage/BannerHomePage'
import MenuHome from '../../components/MenuHome/MenuHome'

const HomePage = () => {
	const [articles, setArticle] = useState<Article[]>([])

	useEffect(() => {
		async function loadhome() {
			const response = await getArticles()
			setArticle(response)
		}
		loadhome()
	}, [])

	return (
		<>

			<Header />
			<ResponsiveAppBar />
			<Box
				sx={{
					backgroundImage:
						'url(https://cdn.pixabay.com/photo/2015/08/19/05/23/banner-895571_1280.jpg)',
					width: '100%',
					height: '250px',
					display: 'flex',
					flexDirection: 'row',
					flexWrap: { xs: 'wrap', sm: 'wrap', md: 'nowrap', lg: 'nowrap' },
					justifyContent: 'space-evenly',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'row',
						flexWrap: { xs: 'wrap', sm: 'wrap', md: 'nowrap', lg: 'nowrap' },
						justifyContent: 'space-around',
						alignItems: 'center',
					}}
				>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imagetools}
					/>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imagebaby}
					/>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imagehandicap}
					/>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imagebike}
					/>
				</Box>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'row',
						flexWrap: { xs: 'wrap', sm: 'wrap', md: 'nowrap', lg: 'nowrap' },
						justifyContent: 'space-around',
						alignItems: 'center',
					}}
				>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imagepet}
					/>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imagebbq}
					/>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imageartist}
					/>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imageprueba}
					/>
				</Box>
			</Box>
			<Container>
				<FilterHomePage />
				<h2>ARTICLES POPULARS</h2>
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'row' },
						flexWrap: { xs: 'wrap', sm: 'wrap', md: 'wrap', lg: 'wrap' },
						gap: '40px',
						marginTop: '50px',
						marginBottom: '50px',
					}}

				>
					{articles.map((article, index) => (
						<CardProduct article={article} key={index} />
					))}
				</Box>
				<h2>ARTICLES POPULARS</h2>
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'row' },
						gap: '20px',
					}}
				></Box>

			</Container>
			<Box
				sx={{
					backgroundColor: '#F9F9F9',
					marginTop: '30px',
					padding: '20px',
				}}
			>

			<Typography
			sx={{
				textAlign: 'center',
				marginBottom: '20px',
			}}
			>T'expliquem com funciona la Biblioteca de les Coses en 5 passos senzills</Typography>
			<CustomizedAccordions/>			

			</Box>
			<Footer />
		</>
	)
}

export default HomePage
