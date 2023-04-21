import React from "react";

export default function User(p) {
  return (
    <div>
      <h2>Pass function as props</h2>
      <button onClick={p.data}>Click me</button>
      {/* dont need() */}
      <br />
      <br />
      <button onClick={() => p.data()}>Click me</button>
      {/* need () bcz arrow function used here */}
    </div>
  );
}
