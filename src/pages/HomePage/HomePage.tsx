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

import MenuHome from '../../components/MenuHome/MenuHome'
import BannerHomePage from '../../components/BannerHomePage/BannerHomePage'

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
			<MenuHome />
			<BannerHomePage />
			<Container>
				<h2>Articles populars</h2>
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
				<h2>Afegits recentment</h2>
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
				>
					T&apos;expliquem com funciona la Biblioteca de les Coses en 5 passos
					senzills
				</Typography>
				<CustomizedAccordions />
			</Box>
			<Footer />
		</>
	)
}

export default HomePage
