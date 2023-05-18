import React, { useState } from "react";
import Homework5 from "./Homework5";

export default function Details()
{
let[inittext,settext]=useState(" ")
let[initemail,setmail]=useState(" ")
let[res,setres]=useState("  ")
let[hideflag,setflag]=useState(false)

 function changeresult(v)
 {
    setres(v)
 }
return<div>
   Name:- <input type="text"  onBlur={(e) =>{settext(e.target.value)}}></input>
  
   <br></br>
   
    Email:-<input type="email" onBlur={(e) => {setmail(e.target.value)}}  ></input>
    <br></br>
    <p>{inittext}<br></br>{initemail}</p>
    <Homework5 f={changeresult}></Homework5>
    Hide Data <input type="checkbox" onChange={(e)=>{setflag(e.target.checked)}}></input>

    {!hideflag && <p>{res}</p>}
    </div>
}