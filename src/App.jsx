import React from "react";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import { useSelector } from "react-redux";

function App() {
  const darkModeRedux = useSelector((state) => state.menu.darkMode);
  return (
    <div
      className={
        darkModeRedux
          ? " bg-white text-gray-900"
          : " bg-gray-800 text-white w-full h-full overflow-hidden "
      }
    >
      {" "}
      <Navbar />
      <div className={darkModeRedux ? "xl:mx-12 mt-2  " : "xl:mx-12 mt-2 "}>
        <Home />
      </div>
    </div>
  );
}

export default App;
