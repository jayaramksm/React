import React from 'react'
import{Link} from 'react-router-dom'
function Nav(props){
return (
<nav>
    <Link to="/state">
<h1 className="text-danger">state</h1></Link>

<Link  to="/jayaram"><h1>class</h1></Link>
<Link  to="/jay"><h1>function</h1></Link>
</nav>)
}
export default Nav