import { Container, Box } from '@mui/material'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CardProduct from '../../components/CardProduct/CardProduct'

import { useEffect, useState } from 'react'
import { getArticles } from '../../services/homeService'

import MenuCatalogue from '../../components/MenuCatalogue/MenuCatalogue'

const CataloguePage = () => {
	const [articles, setArticle] = useState<any>([])

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
					{articles.map((article: any, index: any) => (
						<CardProduct article={article} key={index} />
					))}
				</Box>
			</Container>
			<Footer />
		</>
	)
}

export default CataloguePage
