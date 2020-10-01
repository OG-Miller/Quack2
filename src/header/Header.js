
import React, {useContext} from "react"
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import logo from "../QuackLogo.png"

import { PostDataContext } from "../PostDataContext"

function Header() {

  const { setSearchVal } = useContext(PostDataContext);
  

  return(
  <div className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <br/>
      
      <div className="header__right">
          <SearchIcon className="searchPost__icon" />
          <input  className="searchPost__input" onChange={ (e) => setSearchVal(e.target.value) }  placeholder="Search posts" ></input>
      </div>  
  </div>
      
  )
}





export default Header;