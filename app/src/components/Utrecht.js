import React from "react";

import * as apiClient from "../apiClient";

import "./Utrecht.css";

function Utrecht() {
  const [post, setPost] = React.useState([]);

  const loadPost1 = async () => setPost(await apiClient.getPost1());

  // add post

  React.useEffect(() => {
    loadPost1();
  }, []);
  return (
    <div className="utrecht-section" id="section1">
      {/* map over data*/}
      {post.map(({ id, title, date, places_to_visit, description }) => (
        <li key={id}>
          <h3>{title}</h3>
          <p>{date}</p>
          <li>{places_to_visit}</li>
          <p>{description}</p>
        </li>
      ))}
    </div>
  );
}

export default Utrecht;
