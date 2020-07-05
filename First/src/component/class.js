import React,{Component} from 'react'

class Jayaram extends Component {
render(){
return (
<div>
<h1 className="text-center text-danger">class components{this.props.name}</h1>
<input id="text" type="text"/>
<button onClick={()=>this.input()}>click me</button>
</div>
)}
}
function input(){


var abc =  document.getElementById("text").value
alert(abc)
}
export default Jayaram