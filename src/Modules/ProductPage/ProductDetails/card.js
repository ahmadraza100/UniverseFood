import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width:300,
    height:150,
    flexDirection:"row",
    margin:"1vw",
    fontSize:"30px",
    backgroundColor:"orangered",
    border:"2px solid white",
    borderBottomLeftRadius:"3vw",
    borderTopRightRadius:"3vw"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:"center",
    alignItems:"center"
  },
  content: {
    width:200,
    fontSize:"1vw",
    color:"white",
    display: 'flex',
    flexDirection: 'column',
    justifyContent:"center",
    alignItems:"center",
  },
  cover: {
    width: 100,
    height:150
  },
  button:{
      backgroundColor:"black",
      padding:".3vw .8vw",
      borderRadius:".5vw",
      fontSize:15,
      cursor:"pointer"
     

  },
}));

 function ControlCard({Data}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {Data.dish.split(" ").splice(0,2).join(" ")}
          </Typography>
          <Typography variant="subtitle1">
           Rs. {Data.price}
          </Typography>
          <Typography className={classes.button} variant="subtitle1">
           Add to Cart 
          </Typography>
        </CardContent>
        

      </div>
      <CardMedia
        className={classes.cover}
        image={Data.cover}
        title="Live from space album cover"
      />
    </Card>
  );
}

export default ControlCard
