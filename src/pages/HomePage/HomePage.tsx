/* eslint-disable no-mixed-spaces-and-tabs */
import { Container, Button, Box } from '@mui/material'


import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CardProduct from '../../components/CardProduct/CardProduct'
import imagetools from '../../assets/images/banner/component22.svg'
import imagebaby from '../../assets/images/banner/component23.svg'
import imagehandicap from '../../assets/images/banner/component24.svg'
import imagebike from '../../assets/images/banner/component25.svg'
import imagepet from '../../assets/images/banner/component26.svg'
import imagebbq from '../../assets/images/banner/component27.svg'
import imageartist from '../../assets/images/banner/component28.svg'
import imageprueba from '../../assets/images/banner/component29.svg'
import ResponsiveAppBar from '../../components/MenuHamburguesa/MenuHamburguesa'
import FilterHomePage from '../../components/FilterHomePage/FilterHomePage'
import CustomizedAccordions from '../../components/Faqs/Faqs'
import Typography from 'material-ui/styles/typography'



// type Props = {}

const HomePage = ( ) => {
	return (
		<>
			<Header/>
			<ResponsiveAppBar/>
			<Box
			sx={{
				backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/08/19/05/23/banner-895571_1280.jpg)',
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
							height: { xs: '90px', sm: '100px',md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imagetools}
					/>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px',md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imagebaby}
					/>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px',md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imagehandicap}
					/>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px',md: '100px', lg: '150px' },
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
							height: { xs: '90px', sm: '100px',md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imagepet}
					/>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px',md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imagebbq}
					/>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px',md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imageartist}
					/>
					<Box
						component="img"
						sx={{
							width: { xs: '90px', sm: '100px', md: '100px', lg: '150px' },
							height: { xs: '90px', sm: '100px',md: '100px', lg: '150px' },
						}}
						alt="The house from the offer."
						src={imageprueba}
					/>
				</Box>
			</Box>
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
						<CardProduct/>
						<CardProduct/>
						<CardProduct/>
						<CardProduct/>
					</Box>
				<h2>ARTICLES POPULARS</h2>
				<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', sm: 'row' },
					gap: '20px',
				}}
				>
					<CardProduct/>
					<CardProduct/>
					<CardProduct/>
					<CardProduct/>
				</Box>
			<Box>
			{/* <Typography>Preguntes freqüents</Typography> */}
			Preguntes freqüents
			<CustomizedAccordions/>			
			</Box>		
			</Container>
			<Footer/>
		</>
	)
}

export default HomePage
