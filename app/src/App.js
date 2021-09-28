import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Fredrikstad from "./components/Fredrikstad";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portugal from "./components/Portugal";
import Utrecht from "./components/Utrecht";

import "./App.css";

const App = () => (
  <>
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
  </>
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
        <h1 className="hero-text">Cascais, Portugal</h1>
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
        <h1 className="hero-text">Fredrikstad, Norway</h1>
        <h4 className="hero-subtext">Sommar in Norway's Hidden Gem</h4>
      </a>
    </div>
  );
};

// form to add post
const Admin = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

export default App;
