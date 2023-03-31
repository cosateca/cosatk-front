import { Container, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				height: '120px',
				marginTop: '80px',
				gap: '20px',
			}}
		>
			<Typography variant="body1">
				Biblioteca de les coses - {new Date().getFullYear()}
			</Typography>

			<Typography variant="body1">
				08773 - St. Joan De Mediona - cosatk@gmail.com{' '}
			</Typography>
		</Container>
	)
}

export default Footer
