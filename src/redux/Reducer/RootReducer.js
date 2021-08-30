import { combineReducers } from "redux";
import AuthReducer from "./Reducer";


const rootReducer = combineReducers({
    AuthReducer: AuthReducer,

});


export default rootReducer;