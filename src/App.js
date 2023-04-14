import "./App.css";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

const App = () => {
  return (
    <div>
      <Header />
      <div className="main-display" style={{ display: "flex" }}>
        <Sidebar />
        <Videos />
      </div>
    </div>
  );
};

export default App;
