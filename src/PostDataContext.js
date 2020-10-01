import React, {useState, createContext, useEffect} from "react"


export const PostDataContext = createContext();


export const PostProvider = props => {
    

  const [posts, setPosts] = useState([
   
    // { 
    //   id: 43434,
    //   headline:"Microsoft aims to build steam powered laptop",
    //   body: "My main reason for creating this app was to help people with chronic health issues keep everything in one place and gain insights into how their mood and symptoms interact with other health factors and daily activities in their life. However, I thought it might be useful for communities like yours to assess how certain meds/supplements affect mood and symptoms too.",
    //   time: "10-10-2019",
    //   editedAt: null
    // },
    // { 
    //   id: 12234,
    //   headline:"Tests begin on the new space-x rocket launcher",
    //   body: "Thanks to the help of your subreddits like yours as well as chronic health issue communities like MS, Fibromyalgia, CFS, IBS and many more, we've managed to put something together based on the requests and feedback of testers and our community members over at",
    //   time: "10-10-2019",
    //   editedAt: null
    // },
    // { 
    //   id: 42342,
    //   headline: "ELI5: What exactly is ETH2 and how does it affect existing ETH held?",
    //   body: "One thing that would be nice, an option to change smart quotes to plain double quotes, and em dashes to double hyphens The number of times someone's blog software has  converted their useful code into a stream of crappy syntax errors in the name of typography is infuriating.",
    //   time: "10-10-2020",
    //   editedAt: null
    // },
    // { 
    //   id: 24233,
    //   headline:"Experienced self-taught devs, if you could go back, how would you do/learn things differently",
    //   body: "My main reason for creating this app was to help people with chronic health issues keep everything in one place and gain insights into how their mood and symptoms interact with other health factors and daily activities in their life. However, I thought it might be useful for communities like yours to assess how certain meds/supplements affect mood and symptoms too.",
    //   time: "10-10-2019",
    //   editedAt: null
    // },
    // { 
    //   id: 53533,
    //   headline:"Was there anything you wish started doing earlier",
    //   body: "Thanks to the help of your subreddits like yours as well as chronic health issue communities like MS, Fibromyalgia, CFS, IBS and many more, we've managed to put something together based on the requests and feedback of testers and our community members over at",
    //   time: "10-10-2019",
    //   editedAt: null
    // },  
    // { 
    //   id: 53534,
    //   headline:"What are the best biohacks for really good skin/hair?",
    //   body: " I strongly agree with the Dr. Bronner’s recommendation, they’re a great company. Their bar soap is a little more moisturizing. Just a heads up for OP and everyone else, when using an actual soap like Bronner’s, it takes your hair a week or two to fully adjust, it will take off polymers that traditional shampoos leave on your hair and takes it down to your natural hair. Also, if your hair still feels odd, use their citrus hair rinse after you shower or do an apple cider vinegar hair rinse. My hair has never been softer and healthier. I also highly recommend getting a shower head filter as well, it makes a huge difference on your hair and skin, and it keeps mineral buildup down.",
    //   time: "10-10-2019",
    //   editedAt: null
    // },
    // { 
    //   id: 53544,
    //   headline:"GitHub pages Performance",
    //   body: "As it's my first time hosting I have a few questions. As you can see the website is performing really bad. Especially in Firefox Is the extra animations affecting the performance? Also is the page too long? Will reducing the size of images by using webp help? Do extra unused node_modules and uncalled files affect the performance? Do extra media like images and videos that are unused affecting the webpage performance? Also suggestions are welcome both for performance and responsive styling... Thank you!!!!",
    //   time: "10-10-2019",
    //   editedAt: null
    // },
    // { 
    //   id: 53524,
    //   headline:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    //   body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //   time: "10-10-2019",
    //   editedAt: null
    // },
    // { 
    //   id: 53525,
    //   headline:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    //   body: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    //   time: "10-10-2019",
    //   editedAt: null
    // },
    // { 
    //   id: 53526,
    //   headline:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    //   body: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum '(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
    //   time: "10-10-2019",
    //   editedAt: null
    // },
    // { 
    //   id: 53527,
    //   headline:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    //   body: " by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
    //   time: "10-10-2019",
    //   editedAt: null
    // }
      
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
        editedAt: timeStamp
      }
     
      
  ]);

  const [searchVal, setSearchVal] = useState([ 
   {
     searchVal: false
   }
    
  ]);
  
  console.log("searchVal:", searchVal)  
   

  // console.log(chosenObject);

  

  return(
    <PostDataContext.Provider value={{posts,setPosts, chosenObject, setChosenObject, searchVal, setSearchVal}}>
      {props.children}
    </PostDataContext.Provider>
  )
}

//export default PostDataContext;