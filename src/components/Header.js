import React from 'react';
import logo from "../assets/header/game-logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>TIC-TAC-TOE</h1>
    </header>
  );
}

export default Header;
