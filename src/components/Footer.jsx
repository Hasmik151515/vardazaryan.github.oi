import React from 'react';
import qr from '../assets/qr.png';       // import արա քո նկարը ճիշտ ուղիով
import ver from '../assets/ver.png';     // import արա քո նկարը ճիշտ ուղիով

function Footer() {
  return (
    <>
      <div className='footer'>
        <img className='nkar3' src="https://kids.beeline.am/img/style/logo_t2.svg" alt="Logo" />
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-solid fa-phone"></i>
        <p className='pgu'>100</p>
        <i className="fa-regular fa-envelope"></i>
        <a className='link' href='https://www.telecomarmenia.am/'>info@telecomarmenia.am</a>

        <div className='qr' style={{
          backgroundImage: `url(${qr})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '360px',
          height: '250px',
        }}></div>
      </div>

      <div className='footer2'>
        <img className='ver' src={ver} alt="Footer Decoration" />
      </div>
    </>
  );
}

export default Footer;
    