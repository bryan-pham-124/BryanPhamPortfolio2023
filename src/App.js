import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, 
  Route, Link} from "react-router-dom";
  


import MainContent from './components/MainContent';

import ProjectDetails from './components/ProjectDetails';

function App() {
 

  return (

    <div className="App font-montserrat m-0 bg-customGreen">

        { 
          // <MainContent />
        }
       

        <Router>
          <Routes>
          
              <Route exact path="/" element={<MainContent />} />
              <Route exact path="/projectDetails/:title" element={<ProjectDetails />} />
                
              {
                  /*
                      <Route path="/ProjectDetails/title" component={About} />
                  */



              }
                
             

            </Routes>
      </Router>
      
    </div>
  );
}

export default App;
