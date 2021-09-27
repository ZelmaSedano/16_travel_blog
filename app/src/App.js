import * as React from "react";

import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import "./App.css";

const App = () => (
  <>
    {/* <nav>
      <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
    </nav> */}
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
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
  </>
);

const Contact = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

export default App;
