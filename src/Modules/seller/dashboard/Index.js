import { React, useState } from 'react'
import { useSelector } from "react-redux"
import "./style.css"
import { storage } from "../../../Components/config/firebase"
import { useDispatch } from "react-redux"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {AddDish} from "../../../redux/Action/restaurantActions"
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Avatar from '@material-ui/core/Avatar';
import ControlCard from "./card"













const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "solid white",
        flexWrap:"wrap",
        textAlign: "center",
        backgroundColor: "Oranged",
        '& .MuiTextField-root': {
            margin: theme.spacing(.5),
            width: '25ch',
            borderRadius: "1vh",
            color: "white",
            
            
        },
    },
}));



function Dashboard() {
    const hotel = useSelector(state => state.AuthReducer)
    const classes = useStyles();
    const dispatch = useDispatch("");
    
    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("")
    const [Image, setImage] = useState(null)
    const [Country, setCountry] = useState("")
    const [URL, setURL] = useState(0)
    
    const handleImage = async (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])

        }

    }

    if (Image !== null) {

        const uploadTask = storage.ref(`images/${Image.name}`).put(Image);
        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(Image.name)
                    .getDownloadURL()
                    .then(url => {
                        setURL(url)
                    })
            }
        )
        setImage(null)

    }

    
    const handleSubmit = async () => {

      

        if (URL !== 0) {
            const data = {
                dish: Name,
                price:Phone,
                cover: URL,
                desc:Country
            }

            console.log(data)
          if(!Name||!Phone||!Country){
            alert("Please Fill all the feilds")
          }
          else{
            if (data === undefined) {
                console.log("Undefined Error")
                alert("Product Add Failed")

            }
            else {
                dispatch(AddDish(data));
                setName("")
                setCountry("")
                setPhone("")
                setURL(0);
            }
          }
            
        }

    }


 
    return (
        <div className="roott">
            <h1>Welcome to {hotel.restaurant.restaurant} </h1>
        <div className="dash">

            <div>
            <img alt="Remy Sharp" src={hotel.restaurant.cover} style={{ height: "35vh", width: "50vh", borderRadius: "2vh", marginBottom: "2vh" }} />
            </div>
            <div className={classes.root}>
            {
                    (URL===0)?<div className="imggg"><FastfoodIcon className="iconn" style={{ height: "20vh", width: "20vh", color: "orangered", border: "1vh solid Orangered", borderRadius: "1vh" }}></FastfoodIcon>
                    <input label=""className="file" type="file" id="img" onChange={handleImage} /><label for="img" className="labell">Upload Product Image</label></div>:<Avatar  alt="Remy Sharp" src={URL} style={{height:"20vh" , width:"20vh" , border:".5vh solid orange" , marginBottom:"5vh"}}/>

                }
            <div className={classes.root}>
               
            

                <TextField style={{ backgroundColor: "white", color: "green" }} value={Name} onChange={(e) => setName(e.target.value)} label="Enter Name of Product " variant="filled" />
                <TextField style={{ backgroundColor: "white", color: "green" }} value={Phone} onChange={(e) => setPhone(e.target.value)} id="filled-basic" type="number" label="EnterPrice" variant="filled" />
                <TextField style={{ backgroundColor: "white", color: "green" }} value={Country} onChange={(e) => setCountry(e.target.value)} id="filled-basic" label="Enter Discription" variant="filled" />
            </div>
            <Button onClick={() => handleSubmit()} variant="contained" color="primary" style={{marginTop:"2vh"}}> Add Product </Button>
            
            </div>
           
            </div>
                <h1>Products</h1>
            <div className="productss">
                {
                  (hotel.dishes)?hotel.dishes.map((dish)=>{
                      return <ControlCard Data = {dish}/>
                  }):""
                }
            </div>
        </div >
    )
}

export default Dashboard
