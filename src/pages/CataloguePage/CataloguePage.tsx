/* eslint-disable no-mixed-spaces-and-tabs */
import { Container, Button, Box, Typography, AccordionActionsClasses } from '@mui/material'


import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CardProduct, { Article } from '../../components/CardProduct/CardProduct'
import ResponsiveAppBar from '../../components/MenuHome/MenuHome'
import FilterHomePage from '../../components/FilterHomePage/FilterHomePage'
import CustomizedAccordions from '../../components/Accordion/Accordion'
import { useEffect, useState } from 'react'
import { getArticles } from '../../services/HomePage/homeService'
import BannerHomePage from '../../components/BannerHomePage/BannerHomePage'
import MenuCatalogue from '../../components/MenuCatalogue/MenuCatalogue'
// import { Article } from '../../components/CardProduct/CardProduct'




// type Props = {}

const CataloguePage = ( ) => {

const [articles, setArticle]= useState <Article[]>([])

useEffect(() =>{
	async function loadhome() {
		const response = await getArticles()
		console.log(response.data)
			setArticle (response.data)
}
loadhome();
},[])


	return (
		<>
			<Header/>
			<MenuCatalogue/>
			<Container>
				<h1>Catàleg</h1>
				<FilterHomePage/>
				<h2>Bricolatge i jardineria</h2>
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
						{articles.map((article, index) =>(
						<CardProduct article={article} key={index}/>
						))}
					</Box>
				<h2>Criança</h2>
				<h2>Neteja i llar</h2>
				<h2>Oci i aventura</h2>
				<h2>Oficina</h2>
				<h2>Salut i cures</h2>
			</Container>
			<Footer/>
		</>
	)
}

export default CataloguePage