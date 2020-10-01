import React, {useContext, useState} from "react"
import "./CreatePost.css"
import { PostDataContext } from "../PostDataContext"
import PublishIcon from '@material-ui/icons/Publish';
import { useHistory } from "react-router-dom";


const  CreatePost = () => {
 
  const [ headline, setHeadline ] = useState('');
  const [ body, setBody ] = useState('');
  const  {posts, setPosts} = useContext(PostDataContext);

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
  const timeStamp = curr_date + "-" + curr_month + "-" + curr_year;
  
  //make unique id time stamp.
  const uniqueId = Math.floor(Math.random(8)*100000);

  const history = useHistory();

  const addPost = (e) => {
   
     e.preventDefault();

     if (headline.length < 1  || body.length < 1) {
      alert("Please fill in both fields ; )");
      } else {
        setPosts ( prevPosts => [ { id: uniqueId, headline: headline, body: body, time: timeStamp + " " +  hourStamp, editedAt: null}, ...prevPosts,]);
        console.log('new post added');
    
      history.push('/PostFeed');
     }
     
      
      
  };



  return(
    <div className="CreatePostHolder">
      <form id={uniqueId} time={timeStamp} >
        <textarea 
        maxLength="150"
        type="text" required 
        onChange={(e) => setHeadline(e.target.value) }
        value={headline}
        className="createPostHeadline" 
        placeholder="Headline-check"></textarea> 
        
        <textarea 
        maxLength="2000"
        type="text" required
        onChange={(e) => setBody(e.target.value)}
        value={body}
        className="createPostBody" 
        placeholder="Create post">
        </textarea> 
        <div type="text" required  className="submit__btn" onClick={addPost}>
          <PublishIcon className="publish__icon"  type="text" required /><h4>Submit</h4>
        </div>
       
        <hr></hr>
    
      </form>
    
    </div>
    
  )


}


export default CreatePost;