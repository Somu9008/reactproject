
import React, { useState } from 'react'
import swal from 'sweetalert'

export default function App() {
  
 const [studentname,setstudentname]=useState("somu");


 function save(){

   
  var data= {
      "data": {
        "firstname": studentname,
        "address": "string"
      }
    }
    
    fetch("http://localhost:1337/api/students",{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "Content-Type": "application/json",
      
      }
    }).then((d)=>{swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    })}).catch((e)=>{console.log(e)})
 }


  return (
    <>
     <form>
        <input type="text" value={studentname} onChange={(e)=>{setstudentname(e.target.value)}}/>
        <input type="button" value="save student" onClick={()=>{save()}}></input>
     </form>
      
    </>
  )
}
