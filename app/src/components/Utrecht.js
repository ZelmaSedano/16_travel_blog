import React from "react";

import * as apiClient from "../apiClient";

import "./Utrecht.css";

import Navbar2 from "./Navbar2.js";
import Amsterdam from "./images/utrecht/Amst.jpeg";

function Utrecht() {
  const [post, setPost] = React.useState([]);

  const loadPost = async () => setPost(await apiClient.getPost1());

  // // add post
  // const addPost = (post) => {
  //   console.log(post);
  //   apiClient.addPost(post).then(loadPost());
  // };

  React.useEffect(() => {
    loadPost();
  }, []);
  return (
    <div className="utrecht-section" id="section1">
      <Navbar2 />
      {/* map over data*/}
      {post.map(({ id, title, date, places_to_visit, description }) => (
        <li key={id}>
          <img className="amst" src={Amsterdam} alt="amsterdam"></img>
          <h3 className="data-header">{title}</h3>
          <p className="data-date">{date}</p>
          <p className="data-places">{places_to_visit}</p>
          <p className="data-description">{description}</p>
        </li>
      ))}
      {/* <AddPostForm addPost={addPost} /> */}
    </div>
  );
}

export default Utrecht;
