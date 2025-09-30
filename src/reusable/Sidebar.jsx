import React from 'react'
import '../css/sidebar.css'
import { Link } from 'react-router-dom'
import {homeNav, aboutNav, skillsNav, projectsNav, contactNav, settingsNav, logo} from '../assets/assets.js'
function Sidebar() {
  return (
    <aside>
      <img src={logo} alt="" height={100} className='logo'/>
      {/* height={isCollapse? "70":'100'} */}
      <div className="navs-wrapper">
        <ul className='navs'>
          <li className='nav'>
            <img src={homeNav} alt="" height={40}/>
            <Link to={'/'}>Home</Link>
            <span className="hovers"></span>
          </li>
           <li className='nav'>
            <img src={aboutNav} alt="" height={35} />
            <Link to={'/about'}>About me</Link>
            <span className="hovers"></span>
          </li>
           <li className='nav'>
            <img src={skillsNav} alt="" height={40} />
            <Link to={'/skills'}>Skills</Link>
            <span className="hovers"></span>
          </li>
           <li className='nav'>
            <img src={projectsNav} alt="" height={35} />
            <Link to={'/projects'}>Projects</Link>
            <span className="hovers"></span>
          </li>
           <li className='nav'>
            <img src={contactNav} alt="" height={35} />
            <Link to={'/contact'}>Contact</Link>
            <span className="hovers"></span>
          </li>
           <li className='nav'>
            <img src={settingsNav} alt="" height={40}  />
            <p>Settings</p>
            <span className="hovers"></span>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
