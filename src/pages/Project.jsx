import React, { useState, useEffect,  useRef, useLayoutEffect } from 'react';
import Sidebar from '../reusable/Sidebar';
import '../css/hasSideBar.css';
import '../css/project.css';
import {
  blogProj,
  ecomProj,
  fourCardProj,
  landingProj,
  orderProj,
  perfumeProj,
  recipeProj,
  rpsProj,
  fe3Proj
} from '../assets/assets';
import gsap from 'gsap';
function Project() {
  const projects = [
    { img: blogProj, name: "Blog website", link: 'https://github.com/reyandru?tab=repositories' },
    { img: ecomProj, name: "Ecommerce Website", link: 'https://github.com/reyandru?tab=repositories' },
    { img: fourCardProj, name: "Four card feature section", link: 'https://github.com/reyandru?tab=repositories' },
    { img: fe3Proj, name: "3-column preview card component", link: 'https://github.com/reyandru?tab=repositories' },
    { img: rpsProj, name: "Rock, Paper and Scissor game", link: 'https://github.com/reyandru?tab=repositories' },
    { img: perfumeProj, name: "Product preview card component", link: 'https://github.com/reyandru?tab=repositories' },
    { img: landingProj, name: "Huddle landing page with alternating feature blocks", link: 'https://github.com/reyandru?tab=repositories' },
    { img: recipeProj, name: "Recipe page", link: 'https://github.com/reyandru?tab=repositories' },
    { img: orderProj, name: "Order Page", link: 'https://github.com/reyandru?tab=repositories' }
  ];

  const [isCollapse, setIsCollapse] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

   const project = useRef([]);
    project.current = [];
    const addToProj = (el) => {
      if (el && !project.current.includes(el)) {
        project.current.push(el);
      }
    };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);


  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(project.current, {
      opacity: 0,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.4,
      ease: 'power3.out',
    });
  });

  return () => ctx.revert(); 
}, []);
  return (
    <>
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <section className={`${isCollapse ? 'project-collapses' : 'project-container'}`}>
        <div className="section-head">
          <h1 className="title" style={{ borderColor: theme === 'dark' ? 'white' : 'black' }}>Projects</h1>
        </div>
        <div className="project-wrapper">
          {projects.map((project, index) => (
            <a href={project.link} className="project" key={index} target="_blank" rel="noopener noreferrer" ref={addToProj}>
              <img src={project.img} alt={project.name} className="proj-img" />
              <span className="proj-name" style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                {project.name}
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Project;
