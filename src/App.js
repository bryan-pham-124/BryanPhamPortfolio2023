import logo from './logo.svg';
import './App.css';
import Splash from './components/Splash';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App font-montserrat  bg-customGreen">
        <Splash 
            header={"Bryan Pham"}
            description={"Fullstack Developer with a passion for creating beautiful applications"}
        />
        <Skills />
    </div>
  );
}

export default App;
