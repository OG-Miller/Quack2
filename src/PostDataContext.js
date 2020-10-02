import React, {useState, createContext, useEffect} from "react"


export const PostDataContext = createContext();


export const PostProvider = props => {
    

  const [posts, setPosts] = useState([
   
    // { 
    //   id: 43434,
    //   headline:" ",
    //   body: "",
    //   time: "10-10-2019",
    //   editedAt: null
    // },

      
  ]);
    
          
  const d = new Date();
  const curr_date = d.getDate();
  const curr_month = d.getMonth() + 1; //Months are zero based
  const curr_year = d.getFullYear();
  const timeStamp = curr_date + "-" + curr_month + "-" + curr_year;

  const [chosenObject, setChosenObject] = useState([
   
      {
        id: "",
        headline: "",
        body:"",
        time:"",
        editedAt: timeStamp,
        originIndex:""
      }
     
      
  ]);

  const [searchVal, setSearchVal] = useState([ 
   {
     searchVal: false
   }
    
  ]);
  
  

  

  return(
    <PostDataContext.Provider value={{posts,setPosts, chosenObject, setChosenObject, searchVal, setSearchVal}}>
      {props.children}
    </PostDataContext.Provider>
  )
}

//export default PostDataContext;