import { React , useState, useEffect} from 'react'
import "./indexx.css"
import { useDispatch } from "react-redux"
import { MakeRestaurants } from "../../../redux/Action/restaurantActions"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { storage } from "../../../Components/config/firebase"









const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
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






function Admin() {
    var user = JSON.parse(localStorage.getItem('info'));
    const dispatch = useDispatch("");

    
    useEffect(() => {
        
        document.title = "Seller | FoodUniverse"
        
    })



    const classes = useStyles();


    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("")
    const [Image, setImage] = useState(null)
    const [Country, setCountry] = useState("")
    const [URL, setURL] = useState(0)

    const handleImage = async(e) => {
        if (e.target.files[0]) {
             setImage(e.target.files[0])

        }          

    }

    if(Image!==null){

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
                restaurant: Name,
                contact:Phone,
                cover: URL,
                ouid:user.uid,
                owner:user.name
            }

            console.log(data)
          if(!Name||!Phone||!Country){
            alert("Please Fill all the feilds")
          }
          else{
            if (data === undefined) {
                console.log("Undefined Error")
                alert("Restaurant REGISTRATION FAILED")

            }
            else {
                dispatch(MakeRestaurants(data));
                setName("")
                setCountry("")
                setPhone("")
                setURL(0);
            }
          }
            
        }

    }
    return (
        <div className="admin">
            <div className="headd">
                <h1>Welcome to Seller Boardd</h1>
                <p>Enter the Information below to Register </p>

            </div>
            <div className="boddy">
            <div>
                    {
                        (URL===0)?<div className="imggg"><img src="https://images.all-free-download.com/images/graphiclarge/restaurant_exterior_drawing_cook_diners_icons_colored_cartoon_6834113.jpg" alt="img" style={{height:"25vh" , width:"50vh" , borderRadius:"2vh" , marginBottom:"2vh"}}/>
                        <input label=""className="file" type="file" id="img" onChange={handleImage} /><label for="img" className="labell">Upload Image</label></div>:<img  alt="Remy Sharp" src={URL} style={{height:"35vh" , width:"70vh" ,  borderRadius:"2vh" , marginBottom:"2vh"}}/>


                    }
                </div>
                <div className={classes.root}>

                    <TextField style={{ backgroundColor: "white", color: "green" }} value={Name} onChange={(e) => setName(e.target.value)} label="Enter Name of Restaurant " variant="filled" />
                    <TextField style={{ backgroundColor: "white", color: "green" }} value={Phone} onChange={(e) => setPhone(e.target.value)} id="filled-basic" type="number" label="Enter your Contact Number" variant="filled" />
                    <TextField style={{ backgroundColor: "white", color: "green" }} value={Country} onChange={(e) => setCountry(e.target.value)} id="filled-basic" label="Enter your Location" variant="filled" />
                </div>
              
            </div>
            <Button onClick={() => handleSubmit()} variant="contained" color="primary"> Create </Button>

        </div>
    )
}

export default Admin
