import React from "react";
import "./App.css";
import Search from "./component/Search";
import Pagination from "./component/Pagination";
import Stories from "./component/Stories";

function App() {
  return (
    <>
      <Search/>
      <Pagination/>
      <Stories/>
    </>
  );
}

export default App;
