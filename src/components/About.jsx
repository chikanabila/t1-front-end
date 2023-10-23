import React from 'react';

function About() {
  return (
    <div className="about">
      <div className='conten'>
        <h2 className='titel'>Tentang <span>Kami</span></h2>
        <p>Lorem ipsum dolor sit <br />amet consectetur adipisicing elit. <br />Veritatis, corporis nam dolorem molestias suscipit autem. <br /> Rem nulla saepe exercitationem perspiciatis.</p>
      </div>
      <img src="/about.png" alt="about"  width={400}/>
    </div>
  );
}

export default About;
