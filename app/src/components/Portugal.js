import React from "react";

import * as apiClient from "../apiClient";

import "./Portugal.css";

import Navbar2 from "./Navbar2.js";
import Cathedral from "./images/portugal/Cathedral1.jpeg";

function Portugal() {
  const [post, setPost] = React.useState([]);

  const loadPost = async () => setPost(await apiClient.getPost2());

  // // add pos
  // const addPost = (post) => {
  //   console.log(post);
  //   apiClient.addPost(post).then(loadPost());
  // };

  React.useEffect(() => {
    loadPost();
  }, []);
  return (
    <div className="portugal-section" id="section1">
      <Navbar2 />
      {/* map over data*/}
      {post.map(({ id, title, date, places_to_visit, description }) => (
        <li key={id}>
          <img className="cathedral" src={Cathedral} alt="cathedral"></img>
          <h3 className="data-header-portugal">{title}</h3>
          <p className="data-date">{date}</p>
          <p className="data-places">{places_to_visit}</p>
          <p className="data-description">{description}</p>
        </li>
      ))}
      {/* <AddPostForm addPost={addPost} /> */}
    </div>
  );
}

export default Portugal;
