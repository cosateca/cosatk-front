import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import product from '../../assets/images/picture.png'



export type Article = {
  id:string;
  name: string;
  short_description: string;
  longDesc: string;
  serial: string;
  pricePaid: number;
  value: number;
  image: null;
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

const CardProduct = ({article}:any) => {
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
                    {article.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.short_description}
                  </Typography>
            </CardContent>
            
          </CardActionArea>
        </Card>
  )
}

export default CardProduct

