import React, { useState } from 'react';
import Sidebar from '../reusable/Sidebar';
import '../css/hasSideBar.css';
import '../css/contact.css'
import { fbIcon, githubIcon, emailIcon, phoneNumberIcon } from '../assets/assets';
function Contact() {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <>
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <section className={`${isCollapse ? 'contact-collapses' : 'contact-container'}`}>
        <div className="section-head">
          <h1 className='title'>Contact</h1>
        </div>
        <div className="contact-details">
      <h1  className="contact-msg">Contact me:</h1>
      <div className="col-1">
        <div className="card-col-1 card-col">
          <img src={phoneNumberIcon} className="phoneNo"  height="70"/>
          <h2 className="contact-name">Phone no.:</h2>
          <p className="contact-info">+639343972384</p>
        </div>

        <div className="card-col-1 card-col">
          <img src={fbIcon} height="70"  alt=""/>
          <h2 className="contact-name">Facebook:</h2>
          <a href="https://www.facebook.com/REYANDRUBARIATA" target="_blank" className="contact-info">Rei Andrew Bariata</a>
        </div>

        <div className="card-col-1 card-col">
          <img src={emailIcon} height="70"  alt=""/>
          <h2 className="contact-name">Gmail:</h2>
          <p className="contact-info">bariatareiandrew@gmail.com</p>
        </div>
      </div>
      <div className="col-2">
        <div className="card-col-2 card-col">
            <img src={githubIcon} height="70" alt=""/>
          <h2 className="contact-name">Github</h2>
          <a href="https://github.com/reyandru"  target="_blank" className="contact-info">Reyandru</a>
        </div>
      </div>
      <h3 className="contact-msg">If you want to know more, just contact me using the details above.</h3>
    </div>
      </section>
    </>
  );
}

export default Contact;
