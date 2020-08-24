import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jay from './component/jay';
import Jayaram from './component/class';
import State from './component/state';
import Nav from './component/nav';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Button } from '@material-ui/core';
import Forms from './component/forms';
import List from './component/list';
import Api from './component/api';
function App() {

  

  
  return (

    <Router>
    <div className="App">
    <Button variant="contained">Default</Button>
<Button variant="contained" color="primary">
  Primary
</Button>
<Button variant="contained" color="secondary">
  Secondary
</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" color="primary" href="#contained-buttons">
  Link
</Button>


     <Nav></Nav>
     <Switch>
    
     <Route path="/state" component={State}></Route>
     
     <Route path="/jayaram" component={Jayaram}></Route>
      <Route path="/jay" component={Jay}></Route> 
      <Route path="/form" component={Forms}></Route> 
      <Route path="/list" component={Jayaram }></Route> 
      <Route path="/api" component={Api}></Route> 
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
