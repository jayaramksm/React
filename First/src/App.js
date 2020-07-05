import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jay from './component/jay';
import Jayaram from './component/class';
import State from './component/state';
import Nav from './component/nav';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
    
     <Nav></Nav>
     <Switch>
    
     <Route path="/state" component={State}></Route>
     
     <Route path="/jayaram" component={Jayaram}></Route>
      <Route path="/jay" component={Jay}></Route> 
      <Route path="/" component={Home}></Route>
      </Switch>
      
      {/* <State></State>
     <hi>Hellow jayaram</hi>
     <Jay name="Jayaram"> <p>hello world </p> 
      
     </Jay>
     <Jay name="JAY"> <button>click me</button>
      
      </Jay>
     <Jayaram name="JAY"></Jayaram> */}
    </div>
    </Router>
  );
 
}
const Home = () =>(
  <h1>
    Home
  </h1>
);

export default App;
