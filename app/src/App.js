import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import * as apiClient from "./apiClient";
import Fredrikstad from "./components/Fredrikstad";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Portugal from "./components/Portugal";
import Utrecht from "./components/Utrecht";

import "./App.css";

const App = () => (
  <div>
    {/* <nav>
      <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
    </nav> */}
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/utrecht" element={<Utrecht />} />
        <Route path="/portugal" element={<Portugal />} />
        <Route path="/norway" element={<Fredrikstad />} />
      </Routes>
    </main>
  </div>
);

const Home = () => (
  <>
    {/* <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2> */}
    <Navbar />
    <Hero />
    <Portugal2 />
    {/* <Utrecht2 /> */}
    <Norway2 />
  </>
);

const Portugal2 = () => {
  return (
    <div className="portugal-hero" id="section2">
      <a href="http://localhost:3000/portugal">
        <h1 className="hero-text-portugal">Cascais, Portugal</h1>
        <h4 className="hero-subtext">Secret Coves in Coastal Iberia</h4>
      </a>
    </div>
  );
};

// const Utrecht2 = () => {
//   return (
//     <div className="utrecht-hero" id="section2">
//       <div className="btn-div">
//         <h1 className="hero-header">
//           <Link className="hero-text-1" to="/utrecht">
//             EXPLORE HOLLAND
//           </Link>
//         </h1>
//       </div>
//     </div>
//   );
// };

const Norway2 = () => {
  return (
    <div className="norway-hero" id="section3">
      <a href="http://localhost:3000/norway">
        <h1 className="hero-text-norway">Fredrikstad, Norway</h1>
        <h4 className="hero-subtext">Sommar in Norway's Hidden Gem</h4>
      </a>
    </div>
  );
};

// form to add post
const Admin = () => {
  const [post, setPost] = React.useState([]);

  const loadPost = async () => {
    // loads table 4
    const result = await apiClient.getPost4();
    setPost(result);
    console.log("loadPost", result);
  };

  // const addPost = (post) => apiClient.addPost(post).then(loadPost);
  const addPost = (post) => {
    // addPost is working, but it's not getting to loadPost
    console.log("addPost", post);
    apiClient.addPost(post).then(loadPost);
  };
  React.useEffect(() => {
    loadPost();
  }, []);

  return (
    <div>
      <Navbar2 />
      <AddPostForm addPost={addPost} />
      {/* map over data*/}
      {post.map(({ id, title, date, places_to_visit, description }) => (
        <li key={id}>
          <h3 className="data-header-form">{title}</h3>
          <p className="data-date-form">{date}</p>
          <p className="data-places-form">{places_to_visit}</p>
          <p className="data-description-form">{description}</p>
        </li>
      ))}
      {/* <AddPostForm addPost={addPost} /> */}
    </div>
  );
};

const AddPostForm = ({ addPost }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    // getting what's entered into form out of the form
    const {
      title: { value: title },
      date: { value: date },
      places_to_visit: { value: places_to_visit },
      description: { value: description },
    } = form.elements;
    // checking to see if the data is passing correctly
    console.log("inside form", title, date, places_to_visit, description);
    addPost({
      title,
      date,
      places_to_visit,
      description,
    });
    // everytime you click the 'add' button, the form clears
    form.reset();
  };
  return (
    <form {...{ onSubmit }}>
      <h3 className="form-header">Add Post:</h3>
      <div className="input-wrapper">
        <label>
          <input name="title" placeholder="Title" required />
        </label>
        <label>
          <input name="date" placeholder="Date" required />
        </label>
        <label>
          <input name="places_to_visit" placeholder="Places to Visit" />
        </label>
        <label>
          <textarea className="description" name="description" />
        </label>
        <button className="form-btn">Add Post</button>
      </div>
    </form>
  );
};

export default App;
