import React from 'react';

function SecondaryNavbar() {
  return (
    <div className="main2">
      <div className="nkardiv">
        <img className="nkar" src="https://www.telecomarmenia.am/eshop/img/fb-share.png?v=1" />
      </div>
      <div className="tar">Tariffs</div>
      <div>Internet</div>
      <div>Services</div>
      <div>Roaming</div>
      <div>Online shop</div>
      <div>Offers</div>
      <div>Help</div>
      <div className="payment">
        <i className="fa-regular fa-credit-card"></i>Payment
      </div>
    </div>
  );
}

export default SecondaryNavbar;
