import React, { useState } from 'react';
import Sidebar from '../reusable/Sidebar';
import '../css/hasSideBar.css';
import '../css/contact.css'

function Contact() {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <>
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <section className={`${isCollapse ? 'contact-collapses' : 'contact-container'}`}>
        <div className="section-head">
          <h1 className='title'>Contact</h1>
        </div>
      </section>
    </>
  );
}

export default Contact;
