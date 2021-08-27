import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Education from './components/Education';
import Particles from 'react-particles-js';

function App() {
  return (
    <>
   <Particles
    params={{
      particles:{
        number: {
          value: 30,
          density: {
            enable: true,
            value_area :900
          }
        }
      }
    }}
    /> 
   <Navbar/>
   <Header/>
   <Intro/>
   <Education/>
   <Skills/>
   
    </>
  );
}

export default App;
