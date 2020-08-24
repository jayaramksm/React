import React from 'react'
import  DatePickers from './date'


function Jay(props){
   
return (
<div>
<h1>Function component {props.name} </h1>
{props.children}
<  DatePickers/>
</div>)
}
export default Jay