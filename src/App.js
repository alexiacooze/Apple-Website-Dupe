import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Pride from "./components/Pride/Pride";
import SeriesSeven from "./components/SeriesSeven/SeriesSeven";
import WatchOptions from "./components/WatchOptions/WatchOptions";
import WatchSelect from "./components/WatchSelect/WatchSelect";

function App() {
  return (
    <div>
      <Header />
      <WatchOptions />
      <SeriesSeven />
      <WatchSelect />
      <Pride />
      <Footer />
    </div>
  );
}

export default App;
