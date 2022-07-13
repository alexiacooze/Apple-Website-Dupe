import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import SeriesSeven from "./components/SeriesSeven/SeriesSeven";
import WatchOptions from "./components/WatchOptions/WatchOptions";

function App() {
  return (
    <div>
      <Header />
      <WatchOptions />
      <SeriesSeven />
    </div>
  );
}

export default App;
