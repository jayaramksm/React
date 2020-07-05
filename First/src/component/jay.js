import React from 'react'
function Jay(props){
return (
<div>
<h1>Function component {props.name} </h1>
{props.children}
</div>)
}
export default Jay