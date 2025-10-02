import React, { useState, useEffect } from 'react';
import Sidebar from '../reusable/Sidebar';
import '../css/hasSideBar.css';
import '../css/about.css';
import { onebyone, resume } from '../assets/assets';

function About() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <section className={`${isCollapse ? 'about-collapses' : 'about-container'}`}>
        <div className="section-head">
          <h1 className="title" style={{ borderColor: theme === 'dark' ? 'white' : 'black' }}>About</h1>
          <img src={onebyone} alt="" className="myImg" height={150} />
        </div>
        <div className="about-wrapper">
          <div className="about-text">
            <div className="about-info">
              <div className="about-column">
                <div className="left">
                  <p className="abt-name">Name: Rei Andrew C. Bariata</p>
                  <p className="address">Address: P1 Brgy. Abulalas Hagonoy, Bulacan</p>
                  <p className="college">College: Bulacan State University (Hagonoy Campus)</p>
                </div>
                <div className="right">
                  <p className="birthDay">Birthdate: August 19, <span id="year"></span></p>
                  <p className="age">Age: <span id="ageNow"></span></p>
                  <p className="course">Course: BSIT</p>
                  <p className="major">Major: Web and App Development</p>
                </div>
              </div>
              <div className="descriptions">
                <p className="exp">
                  Experience: OJT Front End Developer in Planning and Development Office in Bulacan State University - Main campus
                </p>
                <p className="short-desc">
                  "To achieve a great role, to be an efficient and productive Affiliate, and to utilize my social and interpersonal skills as an IT Graduate, adding value to the organization's operations and contributing to the common vision and goal of institutional excellence. For my future, to be a successful programmer and contribute to the company and help other generations in a better future"
                </p>
              </div>
            </div>
          </div>
          <div className="resume-dl-btn">
            <button className="downloadResume">
              <a href={resume}>Download Resume</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
