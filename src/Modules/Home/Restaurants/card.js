import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import {Details} from "../../../redux/Action/restaurantActions"
import {useDispatch , useSelector} from "react-redux"
import {useHistory} from "react-router-dom"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    BorderRadiusTopleft:"100px",
    margin:"10px 20px",
    backgroundColor:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",

  },
  media: {
    height: 125,
    width:250
  },
  btn:{
     backgroundColor:"orangered",
     width:230,
     color:"white",
     fontWeight:"bold"
  }
});




 function MediaCard({Data}) {
  const classes = useStyles();
  const dispatch = useDispatch("")
  const history = useHistory();


  const data = useSelector((state)=>state.AuthReducer)

  const details = (param)=>{
    console.log(param)
    dispatch(Details(param))
    history.push("/details")
  }
  
  
   if(data.restaurant){
     console.log(data)
   }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Data.cover}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5" style={{color:"black"}}>
           {Data.restaurant}
          </Typography>
          <Typography gutterBottom variant="h6" component="h5" style={{display:"flex",  alignItems:"center", fontSize:".9rem" , color:"orangered"}}>
           <PhoneIcon/>  0{Data.contact}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.btn} onClick={()=>details(Data.ouid)} >
         Visit Restaurant
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard