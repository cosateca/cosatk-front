import { Container } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    
    <Container sx={{
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   lineHeight:'1em',
   textAlign:'center',
   paddingBottom: '1em'
   
    }}>
  <p>Copyright © 2023</p>
  <p>08773 - St. Joan De Mediona - cosatk@gmail.com </p>

    </Container>
  )
}

export default Footer