import React from 'react';
import kaput from '../assets/kaput.png';
import mobile from '../assets/mobile.png';

function KapBlocks() {
  return (
    <>
      <div className='chorskap' style={{
        backgroundImage: `url(${mobile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '44%',
        height: '270px',
      }}></div>

      <div className='chorskap2' style={{
        backgroundImage: `url(${kaput})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '44%',
        height: '270px',
      }}></div>
    </>
  );
}

export default KapBlocks;
