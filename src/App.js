
import React, { useState } from 'react'

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
    }).then((d)=>{console.log(d)}).catch((e)=>{console.log(e)})
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
