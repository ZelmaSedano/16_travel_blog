import React from "react";

import * as apiClient from "../apiClient";

import "./Fredrikstad.css";

import Navbar3 from "./Navbar3.js";
import Norway from "./images/norway/beach_bottom.jpg";

function Fredrikstad() {
  const [post, setPost] = React.useState([]);

  const loadPost = async () => setPost(await apiClient.getPost3());

  // // add pos
  // const addPost = (post) => {
  //   console.log(post);
  //   apiClient.addPost(post).then(loadPost());
  // };

  React.useEffect(() => {
    loadPost();
  }, []);
  return (
    <div className="utrecht-section" id="section1">
      <Navbar3 />
      {/* map over data*/}
      {post.map(({ id, title, date, places_to_visit, description }) => (
        <li key={id}>
          <img className="norway" src={Norway} alt="norway"></img>
          <h3 className="data-header-norway">{title}</h3>
          <p className="data-date">{date}</p>
          <p className="data-places">{places_to_visit}</p>
          <p className="data-description">{description}</p>
        </li>
      ))}
      {/* <AddPostForm addPost={addPost} /> */}
    </div>
  );
}

export default Fredrikstad;
