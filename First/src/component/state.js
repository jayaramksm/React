import React,{Component} from 'react'

class State extends Component {
    constructor(){
        super ()
            this.state = {
                massige :'state '
            
            }
        }
            change() {
                this.setState({
                    massige : "change msg "
                })
            }
    
render(){
return (
    <div>

<h1 className="text-center text-warning">{this.state.massige}</h1>
<button onClick = {()=>this.change()}>changes</button>
</div>
)
}
}
export default State 