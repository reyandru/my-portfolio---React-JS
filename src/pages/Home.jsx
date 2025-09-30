import React from 'react';
import Sidebar from '../reusable/Sidebar';
import '../css/home.css';
import '../css/hasSideBar.css';

function Home() {
  return (
    <>
    <Sidebar />
    <section className="container">
      <div className="section-head">
        <h1 className='title'>Home</h1>
      </div>
    </section>
    </>
 
  );
}

export default Home;
