import { React, useState,  useEffect } from 'react'
import "./style.css"
import { useDispatch } from "react-redux"
import { doLogin } from "../../../redux/Action/AuthAction"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link , useHistory} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection: "column",
        textAlign:"center",
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            backgroundColor:"white",
            borderRadius:"1vh",
            
        },
    },
}));


function Login() {
    let history = useHistory();
    useEffect(() => {
        
        document.title = "Sign-In "
      })
  
    const classes = useStyles();

    const dispatch = useDispatch("");


    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("")

    
    const handleSubmit = () => {
        const data = {
             email: Email,
             password: Password,
         }
    
        
    
            if(data!==""){
                dispatch(doLogin(data));
                history.push("/")
                setEmail("")
                setPassword("")
                
            }
            
            
            // }
            // else {
                //     alert("USER REGISTRATION FAILED")
            
                
    }
    return (
        <div className="signin">
            <div className="headd">
              <h1>SignIn</h1>
                <p>Enter the Information below to Sign In </p>

            </div>


            <div className={classes.root}>
 
                <TextField value={Email} onChange={(e) => setEmail(e.target.value)} id="filled-basic" label="Enter Email" variant="filled" />
                <TextField value={Password} onChange={(e) => setPassword(e.target.value)} id="filled-basic" label="Enter your Password" variant="filled" />

                <Button onClick={handleSubmit } variant="contained" color="primary"> SUBMIT </Button>
            </div>

                <p>Dont have an account? <Link to="/signup">Signup</Link></p>



        </div>
    )
}

export default Login
