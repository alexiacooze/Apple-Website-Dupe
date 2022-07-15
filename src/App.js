import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Pride from "./components/Pride/Pride";
import SeriesSeven from "./components/SeriesSeven/SeriesSeven";
import WatchOptions from "./components/WatchOptions/WatchOptions";
import WatchSelect from "./components/WatchSelect/WatchSelect";
import WatchTableOne from "./components/WatchTableOne/WatchTableOne";
import WatchTableTwo from "./components/WatchTableTwo/WatchTableTwo";
import WatchToggle from "./components/WatchToggle/WatchToggle";

function App() {
  return (
    <div>
      <Header />
      <WatchOptions />
      <SeriesSeven />
      <WatchToggle />
      <WatchSelect />
      <WatchTableOne />
      <WatchTableTwo />
      <Pride />
      <Footer />
    </div>
  );
}

export default App;
