
import './App.css';
import Header from "./Components/header/index"
import Home from "./Components/Home/index"
import About from "./Components/About/index"
import Restaurant from "./Components/Restaurants/index"
import Footer from "./Components/footer/index"
import Admin from "./Components/Admin/index"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
  return (
    <Router>

      <div className="App">
        <Header />
        <Switch>
        <Route exact path="/signup">
      <Admin/>
        </Route>
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
