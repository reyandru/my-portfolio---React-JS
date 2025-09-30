import React, { useState } from 'react';
import Sidebar from '../reusable/Sidebar';
import '../css/hasSideBar.css';

function About() {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <>
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <section className={`${isCollapse ? 'collapses' : 'container'}`}>
        <div className="section-head">
          <h1 className='title'>About</h1>
        </div>
      </section>
    </>
  );
}

export default About;
