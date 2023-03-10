import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'

type Props = {}

const NewUser = (props: Props) => {
	return (
		<>
			<Box display={{ xs: 'block', sm: 'flex' }} overflow-y={{ xs: 'hidden' }}>
				<Navbar />
				<section>
					<Container
						sx={{
							padding: { xs: '25px', sm: '50px' },
							width: '100vw',
							height: '100vh',
						}}
					>
						<Typography variant="h1">USUARIS</Typography>
						Users, aqui dentro va el contenido a desarrollar por cada developer
					</Container>
				</section>
			</Box>
		</>
	)
}

export default NewUser