import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skill/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
