import { React, useState , useEffect } from 'react'
import "./index.css"
import { useDispatch } from "react-redux"
import { doSignup } from "../../../redux/Action/AuthAction"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"
import FaceIcon from '@material-ui/icons/Face';
import { storage } from "../../../Components/config/firebase"
import Avatar from '@material-ui/core/Avatar';






const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "solid white",
        textAlign: "center",
        backgroundColor: "Oranged",
        '& .MuiTextField-root': {
            margin: theme.spacing(.5),
            width: '25ch',
            borderRadius: "1vh",
            color: "white"

        },
    },
}));






function Admin() {

    useEffect(() => {
        
      document.title = "Sign-Up"
    })


    const classes = useStyles();
    const dispatch = useDispatch("");


    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("")
    const [City, setCity] = useState("")
    const [Country, setCountry] = useState("")
    const [Image, setImage] = useState(null)
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
        console.log("Profile Picture Created")
        setImage(null)

    }

    const handleSubmit = async () => {

      

        if (URL !== 0) {
            const data = {
                firstname: FirstName,
                lastname: LastName,
                email: Email,
                password: Password,
                city: City,
                country: Country,
                image: URL
            }

            console.log(data)
          if(!FirstName||!LastName||!Email||!Password||!City||!Country){
            alert("Please Fill all the feilds")
          }
          else{
            if (data === undefined) {
                console.log("Undefined Error")
                alert("USER REGISTRATION FAILED")

            }
            else {
                dispatch(doSignup(data));
                setFirstName("")
                setLastName("")
                setEmail("")
                setPassword("")
                setCity("")
                setCountry("")
                setURL(0);
            }
          }
            
        }

    }
    return (
        <div className="admin">
            <div className="headd">
                <h1>Resgistration</h1>
                <p>Enter the Information below to Register </p>

            </div>

            <div className="boddy">
                <div className={classes.root}>

                    <TextField style={{ backgroundColor: "white", color: "green" }} value={FirstName} onChange={(e) => setFirstName(e.target.value)} label="Enter First Name" variant="filled" />
                    <TextField style={{ backgroundColor: "white", color: "green" }} value={LastName} onChange={(e) => setLastName(e.target.value)} id="filled-basic" placeholder="Enter Last Name" variant="filled" />
                    <TextField style={{ backgroundColor: "white", color: "green" }} value={Email} onChange={(e) => setEmail(e.target.value)} id="filled-basic" label="Enter Email" variant="filled" />
                    <TextField style={{ backgroundColor: "white", color: "green" }} value={Password} onChange={(e) => setPassword(e.target.value)} id="filled-basic" label="Enter your Password" variant="filled" />
                    <TextField style={{ backgroundColor: "white", color: "green" }} value={City} onChange={(e) => setCity(e.target.value)} id="filled-basic" label="Enter the name of City" variant="filled" />
                    <TextField style={{ backgroundColor: "white", color: "green" }} value={Country} onChange={(e) => setCountry(e.target.value)} id="filled-basic" label="Enter the name of Country" variant="filled" />
                </div>
                <div>
                    {
                        (URL===0)?<div className="imggg"><FaceIcon className="iconn" style={{ height: "20vh", width: "20vh", color: "orangered", border: "1vh solid Orangered", borderRadius: "1vh" }}></FaceIcon>
                        <input label=""className="file" type="file" id="img" onChange={handleImage} /><label for="img" className="labell">Upload Image</label></div>:<Avatar  alt="Remy Sharp" src={URL} style={{height:"20vh" , width:"20vh" , border:".5vh solid orange" , marginBottom:"5vh"}}/>


                    }
                </div>
            </div>
            <Button onClick={() => handleSubmit()} variant="contained" color="primary"> SUBMIT </Button>
            <p>already have an account? <Link to="/signin">SignIn</Link></p>



        </div>
    )
}

export default Admin
