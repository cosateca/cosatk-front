/* eslint-disable no-mixed-spaces-and-tabs */
import { Container, Button, Box } from '@mui/material'


import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CardProduct from '../../components/CardProduct/CardProduct'
import image from 'material-ui/svg-icons/image/image'
import logo from '../../assets/images/image_home_page.png'



// type Props = {}

const HomePage = ( ) => {
	return (
		<>
			<Header/>
			<Box
        		component="img"
        		sx={{
					width: '100%',
          			height: '100%',
        		}}
        		alt="The house from the offer."
        		src={logo}
      		/>
			{/* <Box 
								sx={{
									backgroundImage:'url("../../assets/images/logo.png")',
									width: '1200px',
									height: '200px'
								}}
			>
			</Box> */}
			<Container>
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
			</Container>		
			<Footer/>
		</>
	)
}

export default HomePage
