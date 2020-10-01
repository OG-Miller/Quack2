import React from "react"

function HeirarchyForm(){
  return(
    <div>
         <label className="hierarchyForm__label">Level   </label>
    <select> 
     
        <option value="Choose">Choose Level</option>
        <option value="Self-actualisation">Self-actualisation</option>
        <option value="Esteem">Esteem</option>
        <option value="Love and Belonging">Love and Belonging</option>
        <option value="Safety">Safety</option>
        <option value="Psychological">Psychological</option>
    </select>
    </div>
   
  )
}






export default HeirarchyForm


