import React from "react";
import "./App.scss";
import "./assets/scss/font.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Index from "./pages/Index/Index";

const maxWidth = "lg";
const App = () => (
  <Router>
    <Header maxWidth={maxWidth} />
    <Routes>
      <Route path="/" element={<Index maxWidth={maxWidth} />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
