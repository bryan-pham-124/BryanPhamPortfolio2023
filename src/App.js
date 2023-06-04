import logo from './logo.svg';
import './App.css';
import Splash from './components/Splash';
import Skills from './components/Skills';
import About from './components/About';
import ProjectCard from './components/ProjectCard';


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
           designSkills={['Wireframing', 'Prototyping', 'Presenting Applications', 'UI + UX ', 'Responsive Web Design']}
           designTools={['Figma', 'Krita', 'Font Awesome', 'Microsoft Teams (Presentations)']}
           techSkills={['React.js', 'HTML/CSS with Tailwind.CSS',  'TypeScript/JavaScript', 'Remix.js', 'Prisma', 'SQL', 'MongoDB']}
           techTools={['Visual Studio', 'Github + Github Desktop', 'Chrome Developer Tools', 'Prisma Studio', 'NPM']}
        />

        <ProjectCard />

    </div>
  );
}

export default App;
