import React, { use, useEffect, useState } from 'react';
import '../css/sidebar.css';
import { Link } from 'react-router-dom';
import {
  homeNav,
  aboutNav,
  skillsNav,
  projectsNav,
  contactNav,
  settingsNav,
  logo,
  lightModeIcon,
  darkModeIcon
} from '../assets/assets.js';

function Sidebar({ isCollapse, setIsCollapse }) {

const [theme, setTheme] = useState(() => {
  const saveTheme = localStorage.getItem('theme');
  return saveTheme === 'dark' ? 'dark':'light';
});
const [settings, setSettings] = useState(false);


  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

    const changeTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  function showtheme(){
    setSettings(prev => !prev);
  }

  function toggleCollapse() {
    setIsCollapse(prev => !prev);
  }

  return (
    <aside className={`sidebar ${isCollapse ? "collapse" : ""}`} style={{backgroundColor: theme === 'dark'? '#4A7346':'#D9D9D9'}}>
      <img
        src={logo}
        alt="Logo"
        onClick={toggleCollapse}
        height={isCollapse ? "70" : "100"}
        className="logo"
      />
      <div className="navs-wrapper">
        <ul className="navs">
          <li className="nav">
            <img src={homeNav} alt="Home" height={40} />
            {!isCollapse && <Link to="/" className={`${theme === 'dark'? 'lightText':' '}`}>Home</Link>}
            <span className="hovers"></span>
          </li>
          <li className="nav">
            <img src={aboutNav} alt="About" height={35} />
            {!isCollapse && <Link to="/about" className={`${theme === 'dark'? 'lightText':' '}`}>About Me</Link>}
            <span className="hovers"></span>
          </li>
          <li className="nav">
            <img src={skillsNav} alt="Skills" height={40} />
            {!isCollapse && <Link to="/skills" className={`${theme === 'dark'? 'lightText':' '}`}>Skills</Link>}
            <span className="hovers"></span>
          </li>
          <li className="nav">
            <img src={projectsNav} alt="Projects" height={35} />
            {!isCollapse && <Link to="/projects" className={`${theme === 'dark'? 'lightText':' '}`}>Projects</Link>}
            <span className="hovers"></span>
          </li>
          <li className="nav">
            <img src={contactNav} alt="Contact" height={35} />
            {!isCollapse && <Link to="/contact" className={`${theme === 'dark'? 'lightText':' '}`}>Contact</Link>}
            <span className="hovers"></span>
          </li>
          <li className="nav settings">
            <img src={settingsNav} alt="Settings" height={40} />
            {!isCollapse && <p  onClick={showtheme} className={`${theme === 'dark'? 'lightText':' '}`}>Settings</p>}
            <span className="hovers"></span>

              <div className={`settings-wrapper ${settings ? "show" : ""} ${isCollapse? 'collapseSettings':''}`}>
              <button onClick={changeTheme} className='theme-btn' style={{backgroundColor: theme === 'dark'? 'black':'white', color: theme === 'dark'? 'white':'black'}} ><img src={theme === 'light' ? darkModeIcon : lightModeIcon} alt="Toggle Theme" height={30}  />Theme</button>
            </div>

          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
