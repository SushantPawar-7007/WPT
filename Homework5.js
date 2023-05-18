/* Write a React Component to accept user details
name
email
dropdown Graduate, PG , UnderGrad
If the user selects Graduate show GraduateComponent degree, year,
final year score, univ
If the user selects PG show PGComponent year, Thesis subject
If the user selects UnderGrad show UnderGradComponent SSC , HSC
( USE conditional Renderring ) */

import React from "react"

export default function Homework5({f})
{ 
    
    

  function handler(e)
 { 
   

    switch(e.target.value)
    {
    case "pg" :let p=["Diploma:PG-DAC", "    ", "Subject:WPT,Java,.Net"];
                    f(p)
                    break;
     case "ug" :let u=["Degree:BE-Agri", "  ", "Year:2022", "  ","Score:78","  ","University:MPKV,Rahuri" ];
                    f(u) 
                    break;   
    case "gd" :let g=["SSC:94", "  ", "HSC-Marks:70"];
                    f(g)     
                                         
    }
    
  }

 return <div>

   

     <select onChange={handler}>
        <option value="pg">PostGradtuate</option>
        <option value="ug">Gradtuate</option>
        <option value="gd">underGraduate</option>
       
    </select>
    
  
  

</div>
}



