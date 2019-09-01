import React from 'react';
import logo from '../assets/logo.png';
import foto from '../assets/ST-30664.jpg';

function Header(){
return(
  <header>
    <nav>
    <img src={logo} />
      <div>
      <strong> <span>J.Danubio</span></strong>
        <i className="material-icons"><img src={foto} className="fotoprof" /></i>
      </div>
    </nav>
  </header>
);
}

export default Header;