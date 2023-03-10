import { Button } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <Container>
        <img src={logo} alt="" />
			<div className="App">
				<Button variant="contained">
					<Link to="/dashboard/loans">Accedeix</Link>
				</Button>
			</div>
		</Container>
  )
}

export default Header