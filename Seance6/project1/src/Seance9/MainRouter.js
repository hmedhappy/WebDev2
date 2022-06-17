import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page0 from "../Seance8/Pages/Page0";
import Page1 from "../Seance8/Pages/Page1";
import Page2 from "../Seance8/Pages/Page2";
import Page3 from "../Seance8/Pages/Page3";
import NavBar from "./NavBar";
import TodoApp from "./TodoApp";

export default function MainRouter() {
  return (
    <div>
      <Router>
        <NavBar />
        {/* HEADER */}
        <Routes>
          <Route path="/" element={<Page0 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/app" element={<TodoApp />} />
        </Routes>
        {/* FOOTER */}
        <footer style={{ padding: "50px" }}>FOOTER</footer>
      </Router>
    </div>
  );
}
