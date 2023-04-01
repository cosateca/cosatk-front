import { useEffect, useState } from 'react'
import { Container, Box, Typography } from '@mui/material'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CardProduct from '../../components/CardProduct/CardProduct'
import CustomizedAccordions from '../../components/Accordion/Accordion'
import MenuHome from '../../components/MenuHome/MenuHome'
import BannerHomePage from '../../components/BannerHomePage/BannerHomePage'
import { IArticle } from '../../interfaces/article.interface'
import { getArticles } from '../../services/homeService'

const HomePage = () => {
	const [articles, setArticle] = useState<IArticle[]>([])

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
				<Typography variant="h1">Articles populars</Typography>
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

				<Box
					sx={{
						marginTop: '120px',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<Typography
						variant="h1"
						id="anchortoexplain"
						sx={{
							marginTop: '20px',
							marginBottom: '40px',
						}}
					>
						T&apos;expliquem com funciona la Biblioteca de les Coses en 5 passos
						senzills
					</Typography>
					<CustomizedAccordions />
				</Box>
			</Container>

			<Footer />
		</>
	)
}

export default HomePage
