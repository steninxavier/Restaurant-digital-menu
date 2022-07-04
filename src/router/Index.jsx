import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddDish from "../pages/AddDish";
import EditDish from "../pages/EditDish";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adddish" element={<AddDish />} />
        <Route path="/editdish/:id" element={<EditDish />} />
      </Routes>
    </Router>
  );
};

export default Index;
