import React from 'react';

function Hero() {
  return (
    <div className="hero">
      <div className='pembungkusteks'>
        <h1 className='atas'>Chika Nabila</h1>
        <h2 className='bawah'>SM 3.1</h2>
        <div className='button'>
          <a className='button1' href="">button aa</a>
          <a className='button2' href="">button bb</a>
        </div>
      </div>
      <img src="/heroimg.png" alt="Hero" width={400} />
    </div>
  );
}

export default Hero;
