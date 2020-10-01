import React, { useState }from "react";
import "./SidebarLeft.css"
import HomeIcon from '@material-ui/icons/Home';
import SidebarOption from "./SidebarOption"
import CreateIcon from '@material-ui/icons/Create';



function SidebarLeft(){

  const {setSearchVal } = useState()

  const handleClick= () => {
    setSearchVal("")
  }

  return(
    <div className="sidebar__left">
      
      <br/>
      <br/>
     
      <SidebarOption Icon={HomeIcon} page={"/postFeed"} onClick={handleClick} title="Home" /> 
      <br/>
     
     
      <SidebarOption  Icon={CreateIcon} page={"/CreatePost"} title="Create Post" /> 
     
    
     

      <br/>
      <hr/>
    </div>
  )
}

export default SidebarLeft

