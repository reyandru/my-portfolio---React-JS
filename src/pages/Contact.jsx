import React, { useState, useEffect, useRef, useLayoutEffect  } from 'react';
import Sidebar from '../reusable/Sidebar';
import '../css/hasSideBar.css';
import '../css/contact.css';
import {
  fbIcon,
  githubIcon,
  emailIcon,
  phoneNumberIcon
} from '../assets/assets';
import gsap from 'gsap';


function Contact() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

    const contact = useRef([]);

    contact.current = [];

    const addToContact = (el) => {
      if (el && !contact.current.includes(el)) {
        contact.current.push(el);
      }
    };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);


    useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(contact.current, {
      opacity: 0,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.4,
      ease: 'power3.out',
    });
  });

  return () => ctx.revert(); 
}, []);
  return (
    <>
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <section className={`${isCollapse ? 'contact-collapses' : 'contact-container'}`}>
        <div className="section-head">
          <h1 className="title" style={{ borderColor: theme === 'dark' ? 'white' : 'black' }}>
            Contact
          </h1>
        </div>

        <div className="contact-details">
          <h1 className="contact-msg">Contact me:</h1>

          <div className="col-1">
            <div
              className="card-col-1 card-col"
              style={{
                borderColor: theme === 'dark' ? 'white' : 'black',
                backgroundColor: theme === 'dark' ? '#363131' : '#817777ff'
              }}
              ref={addToContact}
            >
              <img src={phoneNumberIcon} className="phoneNo" height="70" alt="Phone Icon" />
              <h2 className="contact-name">Phone no.:</h2>
              <p className="contact-info">+639343972384</p>
            </div>

            <div
              className="card-col-1 card-col"
              style={{
                borderColor: theme === 'dark' ? 'white' : 'black',
                backgroundColor: theme === 'dark' ? '#363131' : '#817777ff'
              }}
              ref={addToContact}

            >
              <img src={fbIcon} height="70" alt="Facebook Icon" />
              <h2 className="contact-name">Facebook:</h2>
              <a
                href="https://www.facebook.com/REYANDRUBARIATA"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info"
              >
                Rei Andrew Bariata
              </a>
            </div>

            <div
              className="card-col-1 card-col"
              style={{
                borderColor: theme === 'dark' ? 'white' : 'black',
                backgroundColor: theme === 'dark' ? '#363131' : '#817777ff'
              }}
              ref={addToContact}

            >
              <img src={emailIcon} height="70" alt="Email Icon" />
              <h2 className="contact-name">Gmail:</h2>
              <p className="contact-info">bariatareiandrew@gmail.com</p>
            </div>
          </div>

          <div className="col-2">
            <div
              className="card-col-2 card-col"
              style={{
                borderColor: theme === 'dark' ? 'white' : 'black',
                backgroundColor: theme === 'dark' ? '#363131' : '#817777ff'
              }}
              ref={addToContact}

            >
              <img src={githubIcon} height="70" alt="GitHub Icon" />
              <h2 className="contact-name">Github</h2>
              <a
                href="https://github.com/reyandru"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info"
              >
                Reyandru
              </a>
            </div>
          </div>

          <h3 className="contact-msg-2">
            If you want to know more, just contact me using the details above.
          </h3>
        </div>
      </section>
    </>
  );
}

export default Contact;
