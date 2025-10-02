import React, { useState,useEffect } from 'react';
import Sidebar from '../reusable/Sidebar';
import '../css/hasSideBar.css';
import '../css/project.css'
import {  
  blogProj,
  ecomProj,
  fourCardProj,
  landingProj,
  orderProj,
  perfumeProj,
  recipeProj,
  rpsProj,
  fe3Proj} from '../assets/assets';

function Project() {
  const projects = [
    {
      img:blogProj,
      name:"Blog website",
      link: 'https://github.com/reyandru?tab=repositories'
    },
    {
      img:ecomProj,
      name:"Ecommerce Website",
      link: 'https://github.com/reyandru?tab=repositories'
    },
    {
      img:fourCardProj,
      name:"Four card feature section",
      link: 'https://github.com/reyandru?tab=repositories'
    },
      {
      img:fe3Proj,
      name:"3-column preview card component",
      link: 'https://github.com/reyandru?tab=repositories'
    },
      {
      img:rpsProj,
      name:"Rock, Paper and Scissor game",
      link: 'https://github.com/reyandru?tab=repositories'
    },
      {
      img:perfumeProj,
      name:"Product preview card component",
      link: 'https://github.com/reyandru?tab=repositories'
    },
      {
      img:landingProj,
      name:"Huddle landing page with alternating feature blocks",
      link: 'https://github.com/reyandru?tab=repositories'
    },
      {
      img:recipeProj,
      name:"Recipe page",
      link: 'https://github.com/reyandru?tab=repositories'
    },
      {
      img:orderProj,
      name:"Order Page",
      link: 'https://github.com/reyandru?tab=repositories'
    },
     
  ]
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
      <section className={`${isCollapse ? 'project-collapses' : 'project-container'}`}>
        <div className="section-head">
          <h1 className='title' style={{borderColor: theme === 'dark'? 'white':'black'}}>Projects</h1>
        </div>
        <div className='project-wrapper'>
          {projects.map((project,index) => (
            <a href={project.link} className="project" key={index}>
              <img src={project.img} alt={project.name} className='proj-img' />
              <span className='proj-name' style={{color: theme === 'dark' ? 'white':'dark'}}>{project.name}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Project;
