import React, { useState } from "react"
function Objecthook(){
    const [name,setneme] = useState({firstname:"",lastname:""})

    return(
        <div>
            <input type="text" placeholder="enter your firstname" value={name.firstname} onChange={e=>setneme({ ...name,firstname:e.target.value})} />
            <input  type="text" value={name.lastname} onChange={e=>setneme({...name,lastname:e.target.value})} />
            <div>
    <h2>firstname : {name.firstname}</h2>
    <h2>secondname : {name.lastname}</h2>
    <h2>{JSON.stringify(name)}</h2>
            </div>
        </div>  
    )
}
export default Objecthook