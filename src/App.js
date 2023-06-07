import logo from './logo.svg';
import './App.css';
import Splash from './components/Splash';
import Skills from './components/Skills';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import { designSkills, designTools, projects, techSkills, techTools } from './data';
import Footer from './components/Footer';




function App() {
  return (

    <div className="App font-montserrat  bg-customGreen">

        <Splash 
            header={"Bryan Pham"}
            description={"Fullstack Developer with a passion for creating interactable applications with beautiful front end UI."}
        />

        <About 
            header={"About Me"}
            description={
              "I discovered my passion for web development in college and have immersed myself in it ever since. " +
              "Ever since then, I gained experience creating beautiful fullstack dynamic applications, software and UI to help clients achieve their goals."
            }
        />  

        <Skills
           designSkills={designSkills}
           designTools={designTools}
           techSkills={techSkills}
           techTools={techTools}
        />

          
        {
          projects.map((project, i) =>(
             <ProjectCard 
                  key = {i}
                  theme = { i % 2 == 1 ? 'dark': 'light'}
                  title={project.title}
                  description={project.description}
                  techUsed={project.techUsed}
                  screenshotLink={project.screenshotLink}
             />

          ))
        }

        <Footer />
       

    </div>
  );
}

export default App;
