import React, { Component } from 'react';

class List extends Component {
    state = { 

     }
    render() { 
        const { name }=this.props
        // const lists =[
        //     {
        //       id:1,
        //       name:"jayaram",
        //       phone:123
        //     },      {
        //       id:1,
        //       name:"jayaram",
        //       phone:123
        //     },      {
        //       id:1,
        //       name:"jayaram",
        //       phone:123
        //     },
        //   ]
       
        const listitem =name.map(element => {
             
            return( 
                 <div className="text-center text-warning">
            hello List
            <h1>{element.phone}</h1>
            <h1>{element.name}</h1>
         <button className="btn btn-primary" onClick={()=>{this.props.deletes(element.id)}}>Delate data</button>
        </div>

            )
        })

        return ( 
            listitem
         );
    }
}
 
export default List;