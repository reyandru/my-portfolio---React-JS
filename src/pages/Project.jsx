import React, { useState } from 'react';
import Sidebar from '../reusable/Sidebar';
import '../css/hasSideBar.css';

function Project() {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <>
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <section className={`${isCollapse ? 'collapses' : 'container'}`}>
        <div className="section-head">
          <h1 className='title'>Projects</h1>
        </div>
      </section>
    </>
  );
}

export default Project;
