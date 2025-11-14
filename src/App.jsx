import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-container">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
