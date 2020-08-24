


import React, { Component } from 'react';
class Forms extends Component {
    state = {
        name:null,
                email:null,
                phone:null
      }
      
      handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
     
        })      
        console.log(e.target)
        console.log(e.target.id)
            }
           
            handleSubmit=(e)=>{
        e.preventDefault();
       this.props.value(this.state)
        let values = this.state
        console.log(values)
     
            }
         
    render() { 
        return ( 
      
                <div>
                    <h1 id="text">hello wprld</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>neme</label>
                        <input id="name" onChange={this.handleChange} type="text"/>
                        <label>email</label>
                        <input id="email" onChange={this.handleChange} type="text"/>
                        <label>phone</label>
                        <input id="phone" onChange={this.handleChange} type="text"/>
                        <button>click me</button>
                    </form>
                </div>
              )
        
}
}
 
export default Forms;
