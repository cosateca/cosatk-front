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
import ResponsiveAppBar from '../../components/MenuHome/MenuHome'
import FilterHomePage from '../../components/FilterCataloguePage/FilterCataloguePage'
import CustomizedAccordions from '../../components/Accordion/Accordion'
import { useEffect, useState } from 'react'
import { getArticles } from '../../services/homeService'
import BannerHomePage from '../../components/BannerHomePage/BannerHomePage'
import MenuCatalogue from '../../components/MenuCatalogue/MenuCatalogue'
import FilterCataloguePage from '../../components/FilterCataloguePage/FilterCataloguePage'
// import { Article } from '../../components/CardProduct/CardProduct'

// type Props = {}

const CataloguePage = () => {
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
			<MenuCatalogue />
			<Container>
				<h1>Catàleg</h1>
				{/* <FilterCataloguePage /> */}
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: {
							xs: 'repeat(1, 1fr)',
							sm: 'repeat(2, 1fr)',
							md: 'repeat(3, 1fr)',
						},
						gap: '40px',
						marginTop: '50px',
						marginBottom: '50px',
					}}
				>
					{articles.map((article, index) => (
						<CardProduct article={article} key={index} />
					))}
				</Box>
			</Container>
			<Footer />
		</>
	)
}

export default CataloguePage
