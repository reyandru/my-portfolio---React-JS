import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../reusable/Sidebar';
import gsap from 'gsap';
import '../css/hasSideBar.css';
import '../css/about.css';
import { onebyone, resume } from '../assets/assets';

function About() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [age, setAge] = useState(null);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });
  const year = 2003;  
  const month = 7;
  const day = 19;
  const textRef = useRef(null);
  const picture = useRef(null);
  const row1 = useRef(null);
  const button = useRef(null);

  function computeAge(){
    const today = new Date();
    let age = today.getFullYear() - year;

    if(today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)){
      age--
    }

    setAge(age);
  }

  useEffect(() => {
    computeAge();
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);


  useEffect(() => {
  gsap.set(textRef.current, {opacity: 0 , x: -200, autoAlpha: 0});
  gsap.set(picture.current, {opacity: 0});
  gsap.set(row1.current, {y: 50, opacity: 0});
  gsap.set(button.current, {opacity: 0});



  const tl = gsap.timeline();

    tl.to(textRef.current, {
    x: 0,
    opacity: 1,
    autoAlpha: 1,
    duration: 0.8,
    ease: 'power3.out',
  });

   tl.to(picture.current,{
    opacity: 1,
    autoAlpha: 1,
    duration: 0.5,
    ease: 'power3.out',
  });

   tl.to(row1.current, {
      opacity: 1,
      y:0,
      autoAlpha: 1,
      duration: 0.6,
      ease: 'power3.out',
    });


    tl.to(button.current,{
    opacity: 1,
    autoAlpha: 1,
    duration: 0.3,
    ease: 'power3.out',
  });
}, []);

 
  return (
    <>
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <section className={`${isCollapse ? 'about-collapses' : 'about-container'}`}>
        <div className="section-head">
          <h1 className="title" style={{ borderColor: theme === 'dark' ? 'white' : 'black' }} ref={textRef}>About</h1>
          <img src={onebyone} alt="" className="myImg" height={150}  ref={picture}/>
        </div>
        <div className="about-wrapper">
          <div className="about-text">
            <div className="about-info" ref={row1}>
              <div className="about-column">
                <div className="left">
                  <p className="abt-name" >Name: Rei Andrew C. Bariata</p>
                  <p className="address">Address: P1 Brgy. Abulalas Hagonoy, Bulacan</p>
                  <p className="college">College: Bulacan State University (Hagonoy Campus)</p>
                </div>
                <div className="right">
                  <p className="birthDay">Birthdate: August 19, <span id="year">{year}</span></p>
                  <p className="age">Age: <span id="ageNow">{age}</span></p>
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
          <div className="resume-dl-btn" ref={button}>
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
