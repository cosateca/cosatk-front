import { Box, Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import useAuth from '../../hooks/useAuth'

const Header = () => {
	const { auth } = useAuth()
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				marginTop: '10px',
				marginBottom: '10px',
			}}
		>
			<Link to="/">
				<img src={logo} alt="Biblioteca de les cosas" />
			</Link>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Button
					sx={{ marginTop: '5px', paddingLeft: '30px', paddingRight: '30px' }}
					variant="contained"
					color="error"
					title="Accedeix"
				>
					{auth?.email ? (
						<Link to={'/dashboard'}>Accedeix</Link>
					) : (
						<Link to={'/login'}>Accedeix</Link>
					)}
				</Button>
				<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
					<Typography variant="body1" sx={{ marginTop: '10px' }}>
						{auth?.email ?? auth?.email}
					</Typography>
				</Box>
			</Box>
		</Container>
	)
}

export default Header
