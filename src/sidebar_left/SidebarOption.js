import React from "react"
import "./SidebarOption.css"
import { Link } from "react-router-dom"






function SidebarOption({title, Icon, page }) {
  
  
  return (
   <Link to={page}  style={{ textDecoration: 'none' }}>
      <div className="sidebarOption">
        {Icon && <Icon className="sidebarOption__icon" />}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
      </div>
   </Link> 

  
    
  )
}


export default SidebarOption