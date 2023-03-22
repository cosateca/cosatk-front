import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import product from '../../assets/images/picture.png'
import { getArticles } from '../../services/HomePage/homeService';
import { useEffect, useState } from 'react';


type Home = {
  id:string;
  name: string;
  shortDesc: string;
  longDesc: string;
  serial: string;
  pricePaid: number;
  value: number;
  loanFee: number;
  loanPeriod: number;
  components: string;
  careInfo: string;
  ownedBy: string;
  donatedBy: string;
  condition: string;
  brand: string;
  shownOnWeb: string;
}

const CardProduct = () => {

  const [homes,setHomes] = useState <Home[]> ([])

  useEffect (() => {
    async function loadHome() {
      const response = await getArticles ()
      console.log (response.data)
      setHomes (response.data)
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
              {homes.map(home =>(
              // eslint-disable-next-line react/jsx-key, react/jsx-no-comment-textnodes
              <>
                  <Typography gutterBottom variant="h5" component="div">
                    {home.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {home.id}
                  </Typography></>
              ))}
            </CardContent>
          </CardActionArea>
        </Card>
  )
}

export default CardProduct

