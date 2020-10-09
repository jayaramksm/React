import React, { Component } from 'react';
import axios from 'axios'
class Params extends Component {
    state = {  
        id:null,
        data:null
    }
    componentDidMount(){
        var navrout;
        console.log(this.props)
            let id = this.props.match.params.post_id
            navrout=id;
            console.log(id)
            this.setState({
                id:id
            })
            console.log('https://jsonplaceholder.typicode.com/posts/'+navrout)
           
            axios.get('https://jsonplaceholder.typicode.com/posts/'+navrout)
            .then(res=>{
                console.log(res.data)
                this.setState({
                    data:res.data
                })
               
            })
            .catch(error=>{
                console.log(error)
            })
    }
    render() { 
       
        // var values =  ()=>{
             
        //      return(
                
            //  <div className="container mt-5" key={resdata.id}>
            //  <div className="card">
            //  <div className="card-header text-center">
            //  {resdata.title}
            //  </div>
            //  <div className="card-body text-center pt-4 pb-4">
            //      {resdata.body}
            //  </div>
            //  {/* <div className="card-footer text-right">
            //      <button className="btn btn-primary texy-white"> <Link className="text-white" to={'/'+res.id} >Read more..</Link></button>
            //  </div> */}
            //  </div>
            //  </div>
        //      )
        //  }
        // const datas = this.state.data
        // console.log(datas)
        console.log( this.state.data)
        return ( 
            <div>
                hii this is params {this.state.id}
                <div>
                                   
             <div className="container mt-5" >
             <div className="card">
             <div className="card-header text-center">
             {/* {datas.title}jhygfuy */}
             </div>
             <div className="card-body text-center pt-4 pb-4">
                 {/* {resdata.body} */}jyfue
             </div>
             {/* <div className="card-footer text-right">
                 <button className="btn btn-primary texy-white"> <Link className="text-white" to={'/'+res.id} >Read more..</Link></button>
             </div> */}
             </div>
             </div>
                </div>
            </div>
         );
    }
}
 
export default Params;