import React, {useContext, useState} from "react"
import "./EditPost.css"
import { PostDataContext } from "../PostDataContext"
import { useHistory } from "react-router-dom";
import PublishIcon from '@material-ui/icons/Publish';
import DeleteIcon from '@material-ui/icons/Delete';

const EditPost = () => {
const history = useHistory();

  const  { posts, setPosts, chosenObject, setChosenObject } = useContext(PostDataContext);
  
  //make hourstamp.
  const time = new Date().getTime();
  const date = new Date(time);
  const dateTimeString = date.toString();
  const splitTime = dateTimeString.split(' ');
  const hourStamp = splitTime[4];

  //make timestamp.
  const d = new Date();
  const curr_date = d.getDate();
  const curr_month = d.getMonth() + 1; //Months are zero based
  const curr_year = d.getFullYear();
  const timeStamp =   curr_date + "-" + curr_month + "-" + curr_year  ;

  //make unique id time stamp.
  const uniqueId = Math.floor(Math.random(8)*100000);


  const chosenId = chosenObject.id;
  const matchedPost = posts.find( post => post.id === chosenId ); //this matches clicked article to same article in posts
  const indexOfArticleInPosts = posts.indexOf( matchedPost );//original article link index
 


  const updatePost = (e) => {
    e.preventDefault();

    if(chosenObject.headline < 1 || chosenObject.body < 1)  {
      alert("Please fill in both fields ; ) ");
    } else {
    //  setPosts(prevPosts => [prevPosts.splice(indexOfArticleInPosts,1,chosenObject), ...prevPosts] );
    //setPosts( posts.splice([indexOfArticleInPosts+1],1,{chosenObject}) ) // this keeps only original clicked post - not edited

      setPosts(posts.filter(post => post.id !== chosenId)); // this removes the original article
      setPosts (prevPosts => [ chosenObject, ...prevPosts]);// this sets edited article as newest entry
      
    // setPosts(prevPosts =>  [...prevPosts.splice(indexOfArticleInPosts,1,chosenObject),...prevPosts ]) //returns replaced + edited dupe ontop
      //setPosts(prevPosts =>  [...prevPosts.splice(indexOfArticleInPosts,1,chosenObject)] ) // returns just edited article
      history.push('/PostFeed');
    }
      
  };


  const deletePost = (e) => {
    e.preventDefault();
    console.log("delete clicked!");
    
    console.log("chosenObject @ delete: " + chosenObject);
    setPosts ( posts.filter(post=> post.id !== chosenId) );
    console.log("after delete filter posts = "  + posts); 
    history.push('/PostFeed') 
  }


  return(
    <div className="CreatePostHolder">
      <form id={uniqueId} >
        <textarea       
        maxLength="150"
        type="text" required 
        onChange={ (e) => setChosenObject( {...chosenObject, headline: e.target.value, editedAt: timeStamp + ' ' + hourStamp}) }
        value={chosenObject.headline}
        className="createPostHeadline" 
        placeholder="Headline"></textarea> 
        
        <textarea 
        maxLength="2000"
        type="text" required
        onChange={ (e) => setChosenObject( {...chosenObject, body: e.target.value, editedAt: timeStamp + ' ' + hourStamp} )}
        value={chosenObject.body}
        className="createPostBody" 
        placeholder="Create post">
        </textarea> 
        
        
        <div className="controls">
          <div className="update__btn" onClick={updatePost}>
            <PublishIcon className="update__icon"  type="submit"/><h4>Update</h4>
          </div>
          <div className="delete__btn" onClick={deletePost}>
            <DeleteIcon className="delete__icon"  type="submit"/><h4>Delete</h4>
          </div>
        </div>
       
       
      <hr></hr>
    
      </form>
    
    </div>
    
  )


}
       

      


export default EditPost;