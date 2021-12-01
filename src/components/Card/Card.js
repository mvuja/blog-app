import React from "react";
import './card.modules.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// API KEY: 137049f91b254a0d8f4a3c95353c3935

const CardComponent = (props) => {

    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={props.img}
            alt="meerkat"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {props.txt}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}


export default CardComponent