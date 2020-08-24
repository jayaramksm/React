import React,{Component} from 'react'
import SimpleMenu from './menu'
import List from './list'
import Forms from './forms'

class Jayaram extends Component {
    state={
        
            listobjects:[
            {
              id:1,
              name:"jayaram",
              phone:123
            },      {
              id:2,
              name:"ram",
              phone:123
            },      {
              id:3,
              name:"jaya",
              phone:123
            },
          ]
        
    }
    input=(data)=>{
   data.id=Math.random()
   let listobjects = [... this.state.listobjects,data]
   this.setState({
       listobjects:listobjects
   })
          }
          deletes=(id)=>{
let listobjects = this.state.listobjects.filter(data=>{
    console.log(data.id)
    console.log(id)
return data.id !== id  
// data.id == id
})
this.setState({
    listobjects :listobjects
})
          }
render(){

return (

<div>
   
<List deletes={this.deletes} name={this.state.listobjects}></List>
<Forms value={this.input}></Forms>
<h1 className="text-center text-danger">class components{this.props.name}</h1>
<input id="text" type="text"/>
<button onClick={value}>click me</button>
<SimpleMenu/>
</div>
)}
}
 let value = function input(){


var abc =  document.getElementById("text").value
alert(abc)
}
export default Jayaram


