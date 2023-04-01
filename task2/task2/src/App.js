import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Aboutme from './Pages/Aboutme';
import Qualifications from './Pages/Qualifications';
import Hobbies from './Pages/Hobbies';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
<Navbar/>
      <Routes>
        <Route path="/Aboutme" element={<Aboutme/>}/>
        <Route path="/Qualifications" element={<Qualifications/>}/>
        <Route path="/Hobbies" element={<Hobbies/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Experience" element={<Experience/>}/>
                      </Routes>
              </BrowserRouter>
      </div>
  );
}

export default App;
