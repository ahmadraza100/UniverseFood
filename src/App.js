
import './App.css';
import Header from "./Components/header/index"
import Home from "./Modules/Home/Home/index"
import About from "./Modules/Home/About/index"
import Restaurant from "./Modules/Home/Restaurants/index"
import Footer from "./Components/footer/index"
import Signup from "./Modules/Admin/signup/index"
import Signin from "./Modules/Admin/signin/index"
import Seller from "./Modules/seller/sellerRegistration/index"
import PrivateRoute from "./Components/Routing/privateRoute"
import PublicRoute from "./Components/Routing/publicRoute"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Main from './Modules/seller/mainpage';


function App() {
  return (
    <Router>

      <div className="App">
        <Header />
        <Switch>
        <PrivateRoute component={Main}  exact path="/dashboard" /> 
        <PublicRoute restricted={true} component={Signin} exact path="/signin" />
        <PublicRoute restricted={true} component={Signup} exact path="/signup" />
  
        <Route path="/">
        <Home />
        <About />
        <Restaurant />
        </Route>
        </Switch>
        <Footer />



      </div>

    </Router>

  );
}

export default App;
