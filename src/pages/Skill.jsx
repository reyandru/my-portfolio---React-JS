import React, { useState } from 'react';
import Sidebar from '../reusable/Sidebar';
import '../css/hasSideBar.css';
import '../css/skills.css';
import { codeIcon, osInstallIcon, troubleShootIcon } from '../assets/assets';

function Skill() {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <>
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />

      <section className={`${isCollapse ? 'skills-collapses' : 'skills-container'}`}>
        <div className="section-head">
          <h1 className="title">Skills</h1>
        </div>

        <div className="skills-wrapper">
          <div className="skill1 skills">
            <img src={codeIcon} height="80" alt="" />
            <h1 className="skill-ttl">Web Developer</h1>
            <p className="skill-desc">
              I am a Front-End Developer. I enjoy creating user interfaces that enhance the websites I work on. I use vanilla JavaScript along with HTML and CSS, and I have also worked with the React.js framework. I have completed many front-end projects, which you can find on my GitHub.
            </p>
          </div>

          <div className="skill2 skills">
            <img src={troubleShootIcon} height="80" alt="" />
            <h1 className="skill-ttl">PC/Laptop Troubleshoot</h1>
            <p className="skill-desc">
              I also repair PC/Laptop software. Simple knowledge about the components and how to clean its contents, inner and outer the software.
            </p>
          </div>

          <div className="skill3 skills">
            <img src={osInstallIcon} height="80" alt="" />
            <h1 className="skill-ttl">OS Installation</h1>
            <p className="skill-desc">
              I also installed OS on PCs/laptops. I have a bootable USB containing windows 10 and 11.
            </p>
          </div>
        </div>
      </section>

      <section className={`${isCollapse ? 'skills-collapses' : 'skills-container'}`}>
        <div className="programming">
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
              <div className="meter-fill" style={{ width: '85%' }}>85%</div>
            </div>
          </div>

          <h1 className="prog-ttl">Frameworks & Libraries</h1>

          <div className="skill">
            <p className="programmings">React JS</p>
            <div className="meter-container">
              <div className="meter-fill" style={{ width: '75%' }}>75%</div>
            </div>
          </div>

          <div className="skill">
            <p className="programmings">Node JS</p>
            <div className="meter-container">
              <div className="meter-fill" style={{ width: '40%' }}>40%</div>
            </div>
          </div>

          <div className="skill">
            <p className="programmings">Tailwind CSS</p>
            <div className="meter-container">
              <div className="meter-fill" style={{ width: '75%' }}>75%</div>
            </div>
          </div>
        </div>

        <div className="other-tools">
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
            <h1 className='prog-ttl'>Web Designing:</h1>
            <p>Figma</p>
            <p>Canva</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skill;
