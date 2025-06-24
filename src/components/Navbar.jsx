import React from 'react';

function Navbar() {
  return (
    <div className="main">
      <div className="private">Private Clients</div>
      <div className="bus">Business</div>
      <div className="e">E-shop</div>
      <div><i className="fas fa-search"></i></div>
      <div className="hay">հայ</div>
      <div className="rus">Рус</div>
      <div className="eng">Eng</div>
      <div className="peracc"><i className="fa-regular fa-user"></i> Personal account</div>
    </div>
  );
}

export default Navbar;
