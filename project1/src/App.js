import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import IButton from './components/IButton';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Qualifications from './pages/Qualifications';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/About Me" element={<AboutMe/>}/>
        <Route path="/Qualification" element={<Qualifications/>}/>
        <Route path="/Skills" element={<Skills/>}/>
      </Routes>
    </div>
  );
}

export default App;
