import { Button } from '@mui/material'
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
			<div className="App">
				<Button variant="contained" color="error" title="Accedeix">
					<Link to="/dashboard/loans">Accedeix</Link>
				</Button>
				<p>{auth?.email ?? auth?.email}</p>
			</div>
		</Container>
	)
}

export default Header
