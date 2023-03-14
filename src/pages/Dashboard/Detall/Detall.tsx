/* eslint-disable no-mixed-spaces-and-tabs */

import {
	Box,
	Container,
	Typography,
} from '@mui/material'

import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import imageBike from '../../../assets/images/picture.png'
import { blue } from '@mui/material/colors'


type Props = {}

const Detall = (props: Props) => {

	return (
		<>
			<Box
				display={{ xs: 'block', sm: 'flex' }}
				overflow-y={{ xs: 'hidden' }}
				sx={{
					overflow: { xs: 'scroll', sm: 'scroll' },
				}}
			>
				<Navbar />
				<section>
					<Container
						sx={{
							padding: { xs: '25px', sm: '50px' },
							width: '100vw',
							height: '100vh',
						}}
					>
						<Typography variant="h1">Detall Article</Typography>												
                    <Box
                    	sx={{
                            marginTop: '20px',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '10px',
                            bgcolor: '#67B7E1',
                            padding: '20px 50px',
                            width: '80%',  
                        }}
                    >
                        <Box>
                            <img src={imageBike} alt="image bike"/>
                        </Box>
                        <Box>
                            <p><span>Nom:</span>Bicicleta</p>
                            <p><span>Categoria:</span>Nens petits</p>
                            <p><span>Afegit el:</span>20/10/2023</p>
                            <p><span>Codi:</span>1234</p>
                            <p><span>Número de serie:</span>0001</p>
                            <p><span>Condicio:</span>Bona</p>
                            <p><span>Preu pagat:</span>Bianchi</p>
                            <p><span>Marca:</span>200€</p>
                            <p><span>Valor:</span>100€</p>
                            <p><span>Preu de lloguer:</span>5€</p>
                            <p><span>Període de lloguer:</span>7 dies</p>
                            <p><span>Components:</span>Comproveu la pressió dels pneumátics</p>
                            <p><span>Informació de cures:</span>Bicicleta</p>
                            <p><span>Propietar de:</span>Bicicleta</p>
                            <p><span>Donat per:</span>Bicicleta</p>
                            <p><span>Descripció llarga:</span>Bicicleta</p>
                            <p><span>Descripció curta:</span>Bicicleta</p>
                        </Box>
                    </Box>
					</Container>
				</section>
			</Box>
		</>
	)
}

export default Detall