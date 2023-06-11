import '../App.css';
import Splash from './Splash';
import Skills from './Skills';
import About from './About';
import ProjectCard from './project/ProjectCard';
import { designSkills, designTools, techSkills, techTools, projects } from '../data';
import Footer from './Footer';
import ProjectsHeader from './project/ProjectHeader';
import { useRef, useState, useEffect } from 'react';

import React from 'react'
import { Link } from 'react-router-dom';

const MainContent = () => {

  const containerRef = useRef([]);
  const [currentVisible, setCurrentVisible] = useState('');


  //useEffect(() => console.log(currentVisible), [currentVisible])

  const callbackFunction = (entries) => {

    entries.forEach((entry, i) => {
    
        if(entry.isIntersecting){ 
            console.log(entry.target.id);
            setCurrentVisible( entry.target.id);
        }  

    });  

  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: .5
  }

  const observer = new IntersectionObserver(callbackFunction, options);

  useEffect(() => {
      
     containerRef.current.map((elm, i) => {
        if(containerRef && containerRef.current && elm){
             observer.observe(elm);
             return  () =>   observer.unobserve(elm);
        }
    })
 
  }, [containerRef, options])

  return (

    <>

        <Splash 
            header={"Bryan Pham"}
            description={"Fullstack Developer with a passion for creating interactable applications with beautiful front end UI."}
            ref={(el) => (containerRef.current[0] = el)}
            currentVisible= {currentVisible }
        />

        <About 
            header={"About Me"}
            description={
              "I discovered my passion for web development in college and have immersed myself in it ever since. " +
              "Ever since then, I gained experience creating beautiful fullstack dynamic applications, software and UI to help clients achieve their goals."
            }
            ref={(el) => (containerRef.current[1] = el)}
            currentVisible= {currentVisible }
     
        />  

        
        <Skills
            designSkills={designSkills}
            designTools={designTools}
            techSkills={techSkills}
            techTools={techTools}
        />


        <ProjectsHeader/>
    

        {

      
          projects.map((project, i) =>(
            <ProjectCard 
                  key = {i}
                  theme = { i % 2 == 0 ? 'dark': 'light'}
                  title={project.title}
                  description={project.description}
                  techUsed={project.techUsed}
                  screenshotLink={project.screenshotLink}
                  cardNum = {i}
                  
            />

          ))
        }
    
    
        <Footer  />
       
    </>
  );
}

export default MainContent