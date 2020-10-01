import React from "react";
import "./App.css";
import BabySitterCards from "./components/BabySitterCards";
import Header from "./components/Header";
import SwipeButtons from "./components/SwipeButtons";

function App() {
  return (
    <>
      <Header />
      <BabySitterCards />
      <SwipeButtons />
    </>
  );
}

export default App;
