import React, { Component } from 'react';
  export const Api = ()=>{
     
       function rest(){
    var http=new XMLHttpRequest();
    http.open("GET","https:\\jsonplaceholder.typicode.com/users");
 //    http.open("GET","https:\\jsonplaceholder.typicode.com/users")
    http.send();
  http.responseType="json";
  var card=""
  var val
    http.onload=function(){
         val=http.response;
        console.log(val)
        val.forEach(function(val,ind){
            card+="<div className='card mt-4' ><div className='card-header text-center'>"+val.id+
          "</div><div className='text-center card-body'>"+ "<div className='row mt-2'><div className='col-md-6'>"+
          val.name+"</div>"+ "<div className='col-md-6'>"+val.username+"</div></div>"+ 
           "<div class='row mt-2'><div className='col-md-6'>"+val.phone+"</div>"+
"<div className='col-md-6'>"+val.email+"</div></div>"+  
"<div className='row mt-2'><div className='col-md-6'>"+val.address.street+"</div>"+
"<div className='col-md-6'>"+val.address.city+"</div></div>"+"</div><div className='card-footer text-center'>"+
val.website+"</div></div>"
        //   card+="<div class='card' ><div class='card-header'>"+val[index-1].id+"</div><div class='card-body'>"+val[index-1].name+"</div><div class='card-footer'>"+val[index-1].email+"</div></div>"                 
          });
     
         
       document.getElementById("table").innerHTML=card
    }
       http.onerror=function(){
        alert("Lodding error")
    }
}

    return (
        <div className="text-center">
            <button className="btn btn-secondary p-2 " onClick={rest}>click</button>
            <div className="container w-75" >
        <div className="card  m-5" id="table"></div>
        </div>
            
        </div>
    );
                
    
}
 
export default Api;