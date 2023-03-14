import { Button } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <Container sx={{
        display : 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:'10px'
    }}>
        <img src={logo} alt="" /> 
			<div className="App">
				<Button variant="contained" color='error' >
					<Link to="/dashboard/loans">Accedeix</Link>
				</Button>
			</div>
		</Container>
  )
}

export default Header