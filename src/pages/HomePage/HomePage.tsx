/* eslint-disable no-mixed-spaces-and-tabs */
import { Container, Button, Box, Typography, AccordionActionsClasses } from '@mui/material'


import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CardProduct, { Article } from '../../components/CardProduct/CardProduct'
import ResponsiveAppBar from '../../components/MenuHamburguesa/MenuHamburguesa'
import FilterHomePage from '../../components/FilterHomePage/FilterHomePage'
import CustomizedAccordions from '../../components/Accordion/Accordion'
import { useEffect, useState } from 'react'
import { getArticles } from '../../services/HomePage/homeService'
import BannerHomePage from '../../components/BannerHomePage/BannerHomePage'
// import { Article } from '../../components/CardProduct/CardProduct'




// type Props = {}

const HomePage = ( ) => {

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
			<ResponsiveAppBar/>
			<BannerHomePage/>
			<Container>
				<FilterHomePage/>
				<h2>ARTICLES POPULARS</h2>
					<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'row' },
						gap: '20px',
					}}
					>
						{articles.map((article, index) =>(
						<CardProduct article={article} key={index}/>
						))}
					</Box>
				<h2>ARTICLES POPULARS</h2>
				<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', sm: 'row' },
					gap: '20px',
				}}
				>
				</Box>
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
			<Footer/>
		</>
	)
}

export default HomePage
