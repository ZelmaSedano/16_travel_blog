import React from "react";

import * as apiClient from "../apiClient";

import "./Utrecht.css";

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
      {/* map over data*/}
      {post.map(({ id, title, date, places_to_visit, description }) => (
        <li key={id}>
          <h3>{title}</h3>
          <p>{date}</p>
          <li>{places_to_visit}</li>
          <p>{description}</p>
        </li>
      ))}
      {/* <AddPostForm addPost={addPost} /> */}
    </div>
  );
}

// const AddPostForm = ({ addPost }) => {
//   const onSubmit = (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     // getting what's entered into form out of the form
//     const {
//       title: { value: title },
//       date: { value: date },
//       places_to_visit: { value: places_to_visit },
//       description: { value: description },
//     } = form.elements;
//     // checking to see if the data is passing correctly
//     console.log(title, date, places_to_visit, description);
//     addPost({
//       title,
//       date,
//       places_to_visit,
//       description,
//     });
//     // everytime you click the 'add' button, the form clears
//     form.reset();
//   };
//   return (
//     <form {...{ onSubmit }}>
//       <h3>Please enter animal sighting:</h3>
//       <div className="input-wrapper">
//         <label>
//           <input name="title" placeholder="Title" required />
//         </label>
//         <label>
//           <input name="date" placeholder="Date" required />
//         </label>
//         <label>
//           <input name="places_to_visit" placeholder="Places to Visit" />
//         </label>
//         <label>
//           <input name="description" placeholder="Description" />
//         </label>
//         <button>Add Sighting</button>
//       </div>
//     </form>
//   );
// };

export default Utrecht;
