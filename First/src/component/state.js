import React,{Component, createRef} from 'react'
import { Button } from '@material-ui/core';
import Api from './api';

class State extends Component {
    constructor(  ){
     
        super ()
            this.state = {
                massige :'state ',
                inputvalue : ''
            
            }
        }
        value=(event)=>{
            this.setState({
                inputvalue : event.target.value
            })
        }
            change() {
                this.setState({
                    massige : "change msg ",
                   
                 
                })
    
            }
         
    
render(){
return (
    <div>

<h1 className="text-center text-warning">{this.state.massige}</h1>
<Button onClick = {()=>this.change()}>changes</Button>
<Button variant="contained" color="secondary">
  Secondary
</Button>
<input type="text" onChange={this.value} value={this.state.inputvalue} />
</div>
)
}
}

export default State 