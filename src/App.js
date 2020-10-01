import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import SidebarLeft from './sidebar_left/SidebarLeft';
import Header from './header/Header';
import PostFeed from "./home/PostFeed"
import SidebarRight from "./sidebar_right/SidebarRight"
import Footer from "./footer/Footer"
import CreatePost from "./createPost/CreatePost"
import ReadPost from "./readPost/ReadPost"
import { PostProvider }  from "./PostDataContext"
import EditPost from "./editPost/EditPost"


function App() {
  return (
   <PostProvider>
    <Router>
        <div className="homeColumn">
          <Header />
          <div className="forumBody">
            <SidebarLeft />
            <Switch>
              <Route path="/EditPost"  component={EditPost} />
              <Route path="/ReadPost"  component={ReadPost} />
              <Route path="/CreatePost"  component={CreatePost} />
              <Route path="/" component={PostFeed} />
            </Switch>
            <SidebarRight />
          </div>
          <Footer />
        </div>
    </Router>
   </PostProvider>   

  );
  
}

export default App;
