import logo from './logo.svg';
import './App.css';
import Splash from './components/Splash';
import Skills from './components/Skills';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import { designSkills, designTools, projects, techSkills, techTools } from './data';
import Footer from './components/Footer';
import ProjectsHeader from './components/Projects';
import { useRef, useState, useEffect } from 'react';


function App() {

  const containerRef = useRef([]);
  const [currentVisible, setCurrentVisible] = useState('');

  //console.log(containerRef)

  const callbackFunction = (entries) => {

    let noneIntersect = true;

    entries.forEach((entry, i) => {

        if(entry.isIntersecting){
            setCurrentVisible( entry.target.id);
            noneIntersect = false;
        }  

    });

    if(noneIntersect){
       setCurrentVisible('None');
    }


  }

  const options = {
    root: null,
    rootMargin: "00px",
    threshold: .25
  }

  const observer = new IntersectionObserver(callbackFunction, options);

  useEffect(() => {
      
    containerRef.current.map((elm, i) => {

        if(containerRef && containerRef.current){
          
            if (containerRef.current[i]) observer.observe(containerRef.current[i]);

            return () => {

              if(containerRef.current[i]) observer.unobserve(containerRef.current[i]);

            }
        }
    })
 
  }, [containerRef, options])

  return (

    <div className="App font-montserrat  bg-customGreen">

        <Splash 
            header={"Bryan Pham"}
            description={"Fullstack Developer with a passion for creating interactable applications with beautiful front end UI."}
            ref={(el) => (containerRef.current[0] = el)}
        />


        <About 
            header={"About Me"}
            description={
              "I discovered my passion for web development in college and have immersed myself in it ever since. " +
              "Ever since then, I gained experience creating beautiful fullstack dynamic applications, software and UI to help clients achieve their goals."
            }
            ref={(el) => (containerRef.current[1] = el)}
        />  


        {

          /*

              <Skills
                  designSkills={designSkills}
                  designTools={designTools}
                  techSkills={techSkills}
                  techTools={techTools}
                  ref={(el) => (containerRef.current[2] = el)}
              />

              <ProjectsHeader
                      
                  ref={(el) => (containerRef.current[3] = el)}
              />


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
                        ref={(el) => (containerRef.current[i + 4] = el)}
                  />

                ))
              }


              <Footer ref={(el) => (containerRef.current[projects.length  + 3] = el)} />

          */

        }

      
      
       
    </div>
  );
}

export default App;
