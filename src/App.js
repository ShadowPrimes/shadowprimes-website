import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Header />
      <div id="sekcija1">
        <p>Sekcija broj 1</p>
        <Logo />
      </div>
      <div id="sekcija2">
        <p>Sekcija broj 2</p>
        <Logo />
      </div>
      <div id="sekcija3">
        <p>Sekcija broj 3</p>
        <Logo />
      </div>
      <div id="sekcija4">
        <p>Sekcija broj 4</p>
        <Logo />
      </div>
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

function Header() {
  return (
    <div className="header">
      <a href="#sekcija1">Sekcija1</a>
      <a href="#sekcija2">Sekcija2</a>
      <a href="#sekcija3">Sekcija3</a>
      <a href="#sekcija4">Sekcija4</a>
    </div>
  );
}
