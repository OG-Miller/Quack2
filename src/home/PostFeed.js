import React, { useContext, useState, useEffect } from "react"
import  { PostDataContext }  from "../PostDataContext"
import "./PostFeed.css"
import ArticleLink from "./ArticleLink"


const PostFeed = () => {
  const { posts, searchVal, setSearchVal} = useContext(PostDataContext);

     
  useEffect( 
    () => {
      setSearchVal(false);
      
    },[]

  )
  
      const allPosts = posts.map(

        post =>
        <ArticleLink 
        key={post.id}
        id={post.id}
        headline={post.headline} 
        body={post.body}
        time={post.time}
        editedAt={post.editedAt}
        />, 
        // console.log("allPosts")
      )
      
       
      
      const searchedPosts = posts.filter (
        post => post.headline.includes( searchVal )
      ) 
      
  

    
      const mapFilteredPosts = searchedPosts.map (
        
        post =>
        <ArticleLink 
        key={post.id}
        id={post.id}
        headline={post.headline} 
        body={post.body}
        time={post.time}
        editedAt={post.editedAt}
        />
      )
        
      // console.log("mapFilteredPosts: " + mapFilteredPosts)
      
   


  
  // console.log("mapped posts: " + [posts] ) ;
  
  return (
    <div className="articleLink__bg">
      <div className="articleHolder">
        {searchVal === false ?  allPosts : mapFilteredPosts}
        <h2 className="noResults" >{ mapFilteredPosts.length === 0  &&  searchVal.length > 0 ?   "No matching results"  : null }</h2>
      </div>
    </div>
  )
                 
     
}



export default PostFeed;