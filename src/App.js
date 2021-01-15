import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Logo />
      <h2>Description</h2>
      <Logo />
    </div>
  );
}

function Logo() {
  return (
    <div className="babo">
      <h1>ShadowPrimes</h1>
    </div>
  );
}
