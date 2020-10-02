import React,{useContext, useRef, useEffect} from "react"
import  {PostDataContext}  from "../PostDataContext"
import { Link } from "react-router-dom"
import "./ArticleLink.css"



const ArticleLink = (post) => {
  const {posts, chosenObject, setChosenObject}  = useContext(PostDataContext);
  
  
 const handleClick=(e)=>{
     
    const foundId = e.currentTarget.id; 
    const matchedId = posts.find(post => post.id == foundId);
    const theIndex = posts.indexOf(matchedId);
    const selectedArticle = posts[theIndex];
    // setChosenObject([{originIndex:}])
    setChosenObject(selectedArticle , selectedArticle.index); //< what is this?
   
    
  } 
    
    

  return (
    <Link to={"/ReadPost/"}  >
      <div  id={post.id} onClick={ e => handleClick(e) }   className="articleLink">
          <h5 >{post.headline}</h5>
          <span className="posted__at">Posted: {post.time} |</span> 
          { post.editedAt ?
          <span className="edited__at" > Edited: {post.editedAt} |</span> :
           null }
          <span className="post__id"> ID: {post.id} </span> 
               
          {/* <span className="comments">Comments</span> */}
      </div>
    </Link>

  );
}


export default ArticleLink;

