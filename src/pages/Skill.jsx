import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Sidebar from '../reusable/Sidebar';
import '../css/hasSideBar.css';
import '../css/skills.css';
import { codeIcon, osInstallIcon, troubleShootIcon } from '../assets/assets';
import gsap from 'gsap';

function Skill() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  const skillRefs = useRef([]);
  skillRefs.current = [];
  const addToRefs = (el) => {
    if (el && !skillRefs.current.includes(el)) {
      skillRefs.current.push(el);
    }
  };

  

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);


useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(skillRefs.current, {
      x: -300,
      autoAlpha: 0,
      duration: 1.5,
      stagger: 0.6,
      ease: 'power3.out',
    });
  });

  return () => ctx.revert(); 
}, []);


  return (
    <>
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />

      <section className={`${isCollapse ? 'skills-collapses' : 'skills-container'}`}>
        <div className="section-head">
          <h1 className="title" style={{ borderColor: theme === 'dark' ? 'white' : 'black' }}>Skills</h1>
        </div>

        <div className="skills-wrapper">
          <div className="skill1 skills" ref={addToRefs}>
            <img src={codeIcon} height={80} alt="" />
            <h1 className="skill-ttl">Web Developer</h1>
            <p className="skill-desc">
              I am a Front-End Developer. I enjoy creating user interfaces that enhance the websites I work on. I use vanilla JavaScript along with HTML and CSS, and I have also worked with the React.js framework. I have completed many front-end projects, which you can find on my GitHub.
            </p>
          </div>

          <div className="skill2 skills" ref={addToRefs}>
            <img src={troubleShootIcon} height={80} alt="" />
            <h1 className="skill-ttl">PC/Laptop Troubleshoot</h1>
            <p className="skill-desc">
              I also repair PC/Laptop software. Simple knowledge about the components and how to clean its contents, inner and outer the software.
            </p>
          </div>

          <div className="skill3 skills"  ref={addToRefs}>
            <img src={osInstallIcon} height={80} alt="" />
            <h1 className="skill-ttl">OS Installation</h1>
            <p className="skill-desc">
              I also installed OS on PCs/laptops. I have a bootable USB containing Windows 10 and 11.
            </p>
          </div>
        </div>
      </section>

      <section className={`${isCollapse ? 'skills-collapses' : 'skills-container'}`}>
        <div className="programming" style={{ borderColor: theme === 'dark' ? 'white' : 'black' }}>
          <h1 className="prog-ttl">Programming languages</h1>

          <div className="skill">
            <p className="programmings">HTML</p>
            <div className="meter-container">
              <div className="meter-fill" style={{ width: '100%' }}>100%</div>
            </div>
          </div>

          <div className="skill">
            <p className="programmings">CSS</p>
            <div className="meter-container">
              <div className="meter-fill" style={{ width: '100%' }}>100%</div>
            </div>
          </div>

          <div className="skill">
            <p className="programmings">JavaScript</p>
            <div className="meter-container">
              <div className="meter-fill" style={{ width: '85%', backgroundColor: 'yellowGreen' }}>85%</div>
            </div>
          </div>

          <h1 className="prog-ttl">Frameworks & Libraries</h1>

          <div className="skill">
            <p className="programmings">React JS</p>
            <div className="meter-container">
              <div className="meter-fill" style={{ width: '75%', backgroundColor: 'orange' }}>75%</div>
            </div>
          </div>

          <div className="skill">
            <p className="programmings">Node JS</p>
            <div className="meter-container">
              <div className="meter-fill" style={{ width: '40%', backgroundColor: 'red' }}>40%</div>
            </div>
          </div>

          <div className="skill">
            <p className="programmings">Tailwind CSS</p>
            <div className="meter-container">
              <div className="meter-fill" style={{ width: '75%', backgroundColor: 'orange' }}>75%</div>
            </div>
          </div>
        </div>

        <div className="other-tools" style={{ borderColor: theme === 'dark' ? 'white' : 'black' }}>
          <div className="prog-tools">
            <h1 className="prog-ttl">Databases & Tools:</h1>
            <p>MySQL Workbench</p>
            <p>PhpMyAdmin</p>
            <p>XAMPP</p>
            <p>GitHub</p>
            <p>VSCode</p>
            <p>Insomnia</p>
          </div>

          <div className="design-tools">
            <h1 className="prog-ttl">Web Designing:</h1>
            <p>Figma</p>
            <p>Canva</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skill;
