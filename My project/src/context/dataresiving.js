import React, { Component } from 'react';
import { Themcreat } from './parentcontext';
class Booklist extends Component {
    static contextType=Themcreat
    state = {  }
    render() { 
        // const {theme,light,dark}=this.context
        // const thems = theme ? light : dark
        // console.log(thems)
        return ( 
           <div >
               <Themcreat.Consumer>
                   {value=>(
                        <div className={value}>hello {value}</div>
                   )}
               </Themcreat.Consumer>
               <button className={this.context}>hii</button>
               <li>hi</li>
               <li>oye</li>
               <li>jayaram</li>
           </div>
         );
    }
}
 
// const ButtonContext = React.createContext('btn btn-darkyellow'); 
// class Booklist extends Component { 
// render() { 
// return ( 
// <ButtonContext.Provider value="btn btn-success"> 
// <Button /> 
// </ButtonContext.Provider> 
// ); 
// } 
// } 
// function Button(props) { 
// return ( 
// <div className="container"> 
// <ButtonColor /> 
// </div> 
// );  
// } 
// class ButtonColor extends Component { 
// static contextType = ButtonContext; 
// render() { 
// return<center><h1>Hello World :) :)</h1><br/>
// <button className={this.context} > 
// <h2> Bootstrap Success Button</h2>
// </button></center>; 
// } 
// } 
export default Booklist;