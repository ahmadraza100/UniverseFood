import {React  ,useState} from 'react'
import "./index.css"
import {useDispatch} from "react-redux"
import { doSignup} from "../../redux/Action/AuthAction"

function Admin() {

    const dispatch = useDispatch("");



  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("")
  const [Restaurant, setRestaurant] = useState("")
  const  [ City, setCity] = useState("")
  const  [ Country, setCountry] = useState("")
  const [Data, setData] = useState({})

  const handleSubmit = ()=>{
      const data = {
          firstname:FirstName,
          lastname:LastName,
          email:Email,
          password:Password,
          city:City,
          country:Country
      }
      setData(data)
      console.log(Data)
      setFirstName("")
      setLastName("")
      setEmail("")
      setPassword("")
      setCity("")
      setCountry("")
      if(Data===undefined){
          console.log("Undefined Error")
          
        }
        else{
          dispatch(doSignup(Data));
      }
  }
    return (
        <div className="admin">
            <div>
                <h1>Restaurant Registration </h1>
                <p>Please Enter the Information below to Register a New User</p>

            </div>
        

             <div className="form">
                    <input value={FirstName} onChange={(e)=>setFirstName(e.target.value)}placeholder="Enter First Name"/> 
                    <input value={LastName} onChange={(e)=>setLastName(e.target.value)}placeholder="Enter Last Name"/> 
                    <input value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter The Email" />
                    <input   type="password" value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter the password" />
                    <input     value={City} onChange={(e)=>setCity(e.target.value)} placeholder="Enter Name of Your City" />
                    <input     value={Country} onChange={(e)=>setCountry(e.target.value)} placeholder="Enter your Name" />

                    <button className="button" onClick={()=>handleSubmit()}>SUBMIT</button>
            </div>
               
               
            
        </div>
    )
}

export default Admin
