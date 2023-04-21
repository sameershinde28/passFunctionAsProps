import "./styles.css";
import User from "./User";
import React from "react";
export default function App() {
  function getData() {
    alert("hello function in App");
  }

  return (
    <div className="App">
      <h1>React</h1>
      <User data={getData} />
    </div>
  );
}
