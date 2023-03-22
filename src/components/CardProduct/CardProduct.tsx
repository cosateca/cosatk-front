import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import product from '../../assets/images/picture.png'
import { getArticles } from '../../services/HomePage/home.api';
import { useEffect, useState } from 'react';


type Home = {
  name: string
}

const CardProduct = () => {

  const [homes,setHomes] = useState <Home> ()

  useEffect (() => {
    async function loadHome() {
      const response = await getArticles ()
      console.log (response.data)
      setHomes (response.data.Object)
    }
    loadHome()
  },[])

  return ( 
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={product}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {homes?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
  )
}

export default CardProduct

