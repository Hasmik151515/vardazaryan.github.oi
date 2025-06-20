import React, { useState, useEffect } from 'react';
import './App.css';
import haso from './assets/haso.png';
import nkar from './assets/nkar.png';
import nkarr from './assets/nkarr.png';
import nkarrr from './assets/nkarrr.png';
import nka from './assets/nka.png';
import nk from './assets/nk.png';
import kaput from './assets/kaput.png';
import mobile from './assets/mobile.png';
import kaputt from './assets/kaputt.png';
import kapu from './assets/kapu.png';
import verj from './assets/verj.png';
import qr from './assets/qr.png';
import ver from './assets/ver.png';


function App() {
  const images = [
    haso,
    nkar,
    nkarr,
    nkarrr,
    nk,
    nka

  ];


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="main">
        <div className="private">Private Clients</div>
        <div className="bus">Business</div>
        <div className="e">E-shop</div>
        <div><i className="fas fa-search"></i></div>
        <div className="hay">հայ</div>
        <div className="rus">Рус</div>
        <div className="eng">Eng</div>
        <div className="peracc"><i className="fa-regular fa-user"></i>Personal account</div>
      </div>

      <div className="main2">
        <div className="nkardiv"><img className="nkar" src="https://www.telecomarmenia.am/eshop/img/fb-share.png?v=1" /></div>
        <div className="tar">Tariffs</div>
        <div>Internet</div>
        <div>Services</div>
        <div>Roaming</div>
        <div>Online shop</div>
        <div>Offers</div>
        <div>Help</div>
        <div className="payment"><i className="fa-regular fa-credit-card"></i>Payment</div>
      </div>

      <div style={{ width: '100%', overflow: 'hidden', height: '620px' }}>
        <img
          src={images[index]}
          alt={`Slide ${index}`}
          style={{ width: '100%', height: '620px', objectFit: 'cover' }}
        />
      </div>

      <div class='chorskap' style={{
        backgroundImage: `url(${mobile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '44%',
        height: '270px',
      }}>

      </div>
      <div class='chorskap2' style={{
        backgroundImage: `url(${kaput})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '44%',
        height: '270px',
      }}>

      </div>

      <div class='chorskap3' style={{
        backgroundImage: `url(${kaputt})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '54%',
        height: '270px',
      }}>

      </div>


      <div class='chorskap4' style={{
        backgroundImage: `url(${kapu})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '34%',
        height: '270px',
      }}>

      </div>

      <div class='diver'>
        <h1>Become Team subscriber</h1>
        <p class = 'amena'>Join us with your number and use all advantages of Team.</p>
        <button class='karmir'>Join</button>
      </div>

      <h1 class='haha'>Newsfeed</h1>

      <div class='pap'>
        <img class='papiner' src='https://www.telecomarmenia.am/images/news/2/17496487523372.jpeg' />
        <p class='amis'>11 June</p>
        <p class='tak'>Team Group, NVIDIA, and Firebird Announce a $500 Million Megaproject to Build a Regional AI Supercomputing Hub</p>
      </div>

      <div class='pap2'>
        <img class='papiner2' src='https://www.telecomarmenia.am/images/news/2/17460160429221.jpeg' />
        <p class='amis2'>30 April</p>
        <p class='tak2'>Team Telecom Armenia Expands International Partnerships: U.S. Newsmax Channel to Air in Armenia</p>
      </div>

      <div class='pap3'>
        <img class='papiner3' src='https://www.telecomarmenia.am/images/news/1/17453080912448.jpeg' />
        <p class='amis3'>22 April</p>
        <p class='tak3'>Team Telecom Armenia to Plant a One-Hectare Forest in Lori Region</p>
      </div>

      <div class='verj' style={{
        backgroundImage: `url(${verj})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%%',
        height: '700px',
      }}>

      </div>

      <div class='footer'>
        <img class='nkar3' src="https://kids.beeline.am/img/style/logo_t2.svg" />
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-solid fa-phone"></i>
        <p class='pgu'>100</p>
        <i class="fa-regular fa-envelope"></i>
        <a class='link' href='https://www.telecomarmenia.am/'>info@telecomarmenia.am</a>

        <div class='qr' style={{
          backgroundImage: `url(${qr})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '360px',
          height: '250px',
        }}></div>
      </div>

      <div class='ynd'>
        <div class='vernagir2'><i class="fa-regular fa-building"></i></div>

        <div class='vernagir'>About Company</div>
        <div class='yndch'>About us</div>
        <div class='yndch'>Connections museum</div>
        <div class='yndch'>News</div>
        <div class='yndch'>Career in Telecom Armenia</div>
        <div class='yndch'>Results and reporting</div>
        <div class='yndch'>Corporate Ethics and Compliance</div>
        <div class='yndch'>Sustainable Development</div>
        <div class='yndch'>To shareholders</div>

      </div>


      <div class='ynd2'>
        <div class='vernagir2'><i class="fa-solid fa-circle-exclamation"></i></div>

        <div class='vernagir'>Information</div>
        <div class='yndch'>Terms and conditions</div>
        <div class='yndch'>Security</div>
        <div class='yndch'>E-shop terms</div>
        <div class='yndch'>Credit terms</div>
        <div class='yndch'>Delivery terms</div>
        <div class='yndch'>Sales and service centers</div>
        <div class='yndch'>Coverage</div>
        <div class='yndch'>Mobile network coverage areas</div>
        <div class='yndch'>Coverage</div>
        <div class='yndch'>Mobile network coverage areas</div>
        <div class='yndch'>Team internet available areas</div>
        <div class='yndch'>Useful documents</div>
        <div class='yndch'>Partners and suppliers</div>
        <div class='yndch'>Privacy policy</div>
        <div class='yndch'>RA regions’ codes</div>


      </div>
      <div class='ynd3'>
        <div class='vernagir2'><img class = 'nkarr'src = 'https://img.icons8.com/ios7/600w/FFFFFF/four-squares.png'/></div>

        <div class='vernagir'>Team applications</div>
        <div class='yndch'>TeamTV</div>
        <div class='yndch'>My Team</div>
        <div class='yndch'>Team Pay</div>
        <div class='yndch'>Team Energy</div>

      </div>
      <div class = 'footer2'>
        <img class = 'ver' src ={ver}/>
      </div>
    </div>

  )
}

export default App;


