import React from "react";
import Navbar from "./components/Navbar";
import MidMain from "./components/MidMain";
import Footer from "./components/Footer";

export default function App() {

  return (
      <div className="dark:bg-white ">
        <Navbar />
        <MidMain />
        <Footer />
      </div>
  );
}
