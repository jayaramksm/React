import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jay from './component/jay';
import Jayaram from './component/class';
import State from './component/state';

function App() {
  return (
    <div className="App">
      <State></State>
     <hi>Hellow jayaram</hi>
     <Jay name="Jayaram"> <p>hello world </p> 
      
     </Jay>
     <Jay name="JAY"> <button>click me</button>
      
      </Jay>
     <Jayaram name="JAY"></Jayaram>
    </div>
  );
}

export default App;
