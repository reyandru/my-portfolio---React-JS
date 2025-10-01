import React, { useState } from 'react';
import Sidebar from '../reusable/Sidebar';
import '../css/hasSideBar.css';
import { onebyone } from '../assets/assets';

function About() {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <>
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <section className={`${isCollapse ? 'collapses' : 'container'}`}>
        <div className="section-head">
          <h1 className='title'>About</h1>
          <img src={onebyone} alt="" height={100} />
        </div>
      </section>
    </>
  );
}

export default About;
