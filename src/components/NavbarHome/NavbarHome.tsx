import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navigationmenu = () => {
  return (
    
    <Container sx={{
   display: 'flex',
   flexDirection: 'row',

   alignItems: 's',
   lineHeight:'1em',
   textAlign:'center',
   paddingBottom: '1em'
   
    }}>
  <Link to={''}>Com funciona?</Link>
  <Link to={''}>Catálogo</Link>
  <Link to={''}>Copyright © 2023</Link>
  <Link to={''}>Contacta</Link>

    </Container>
  )
}

export default Navigationmenu