import {LOGIN,LOGOUT} from "../Action/AuthAction";


// we will use this isUserLoggedIn in navigation for checking weather user login or not
const initialState = {
  isUserLoggedIn : false,
  User: null,
  Profile:"",
  restaurant:null,
  dishes:null,
  restaurants:null

 }


 
 
function AuthReducer(state=initialState, action) { 
     switch (action.type) {

         case LOGIN:{

            localStorage.setItem('user', true);
            const info = {
                name: action.payload.profile.firstname +" " + action.payload.profile.lastname,
                image:action.payload.profile.image,
                location:action.payload.profile.city +" , " + action.payload.profile.country,
                uid:action.payload.profile.uid
            }
            console.log(info)
            localStorage.setItem('info', JSON.stringify(info));
            window.location.reload(false);

            

             return {
                 ...state,
                isUserLoggedIn:  true,
                User: action.payload.user,
                Profile:action.payload.profile
             };
         }

         case LOGOUT:{
            window.location.reload(false);
                 return {
                     ...state,
                    isUserLoggedIn:  false,
                    user:null,
                    restaurant:null
                 };
             }
       







             case "FetchRestaurant":{

                return {
                ...state,
                restaurant:action.payload.restaurant,
                dishes:action.payload.dish
                };
            }


            case "NewRestaurant":{
                return {
                ...state,
                restaurant:action.payload
                };
            }

            case "AddDish":{
                return state;
            }
            
            case "FetchRestaurants":{

                return {
                ...state,
                restaurants:action.payload
                };
            }
             
     
         default:
         return state;
     }
 }

 

export default AuthReducer