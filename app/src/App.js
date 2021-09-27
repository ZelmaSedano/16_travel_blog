import * as React from "react";

import { Routes, Route } from "react-router-dom";

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
    <Utrecht />
    <Portugal />
    <Fredrikstad />
  </>
);

// form to add post
const Admin = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

export default App;
