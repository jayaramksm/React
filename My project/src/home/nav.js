import React, { Component } from 'react';
import{Link} from 'react-router-dom'

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
<div className="d-flex justify-content-around">
    
<Link  to="/home"><h1>Home</h1></Link>
<Link  to="/menu"><h1>menu</h1></Link>
<Link  to="/usehook"><h1>usesatte hook</h1></Link>
</div>
         );
    }
}
 
export default Navbar;