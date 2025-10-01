import React, { useState } from 'react';
import Sidebar from '../reusable/Sidebar';
import '../css/hasSideBar.css';
import '../css/about.css';
import { onebyone, resume } from '../assets/assets';

function About() {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <>
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <section className={`${isCollapse ? 'about-collapses' : 'about-container'}`}>
        <div className="section-head">
          <h1 className='title'>About</h1>
          <img src={onebyone} alt="" className='myImg' height={150} />
        </div>
        <div className="about-wrapper">
          <div className="about-text">
              <div className="about-info">
               <div className="about-column">
                 <div className="left">
                   <p class="abt-name">Name: Rei Andrew C. Bariata</p>
        <p class="address">Address: P1 Brgy. Abulalas Hagonoy, Bulacan</p>
        <p class="college">College: Bulacan State University (Hagonoy Campus)</p>
                </div>
                <div className="right">
                   <p class="birthDay">Birthdate: August 19, <span id="year"></span></p>
        <p class="age">Age: <span id="ageNow"></span></p>
        <p class="course">Course: BSIT</p>
        <p class="major">Major: Web and App Development</p>
                </div>
</div>
                 <div class="descriptions">
      <p class="exp">Experience: OJT Front End Developer in Planning and Development Office in Bulacan State University - Main campus</p>
      <p class="short-desc">"To achieve a great role, to be an efficient and productive Affiliate, and to utilize my social and interpersonal skills as an IT Graduate, adding value to the organization's operations and contributing to the common vision and goal of institutional excellence. For my future, to be a successful programmer and contribute to the company and help other generations in a better future
"</p>
    </div>
               
              </div>
          </div>
          <div className="resume-dl-btn">
            <button class="downloadResume"><a href={resume}>Download Resume</a></button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
