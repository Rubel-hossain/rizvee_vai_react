import Home from "../pages/home";
import Signup from "../pages/signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/scss/global.scss";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/" exact={true}>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
