
import Home from './Pages/Home';
import About from './Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
      <Router>
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>        
         
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>  
      </Router>
  );
}

export default App;
