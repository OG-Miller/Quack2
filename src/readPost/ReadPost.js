import React,{useContext} from "react"
import "./ReadPost.css"
import { PostDataContext } from "../PostDataContext"
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


import { useHistory } from "react-router-dom";

function ReadPost(){
  const history = useHistory();
  const { posts, matchId, chosenObject} = useContext(PostDataContext);
  
  const editPost = (e) => {
    e.preventDefault();
    history.push('/EditPost') ;
  }

 
  return(
    
    <div className="ReadPostHolder">
        
      <div>
        <h3 className="postHeadline">{chosenObject.headline}</h3>
        <p className="postBody">{chosenObject.body}</p>
      </div>
      <div type="text" className="edit__button" onClick={editPost}>
          <EditOutlinedIcon className="edit__icon"/>
          <h4>Edit Post</h4>
      </div>
      <hr></hr>

    </div>
  

  )
}




export default ReadPost;


// let selectedEntry = fetchedEntriesArray.find( o => o.id === selectedId ); 