 import {Routes, BrowserRouter as Router, Link, Route } from 'react-router-dom';
 import Home from './pages/Home';
 import Contact from './pages/Contact';
 import About from './pages/About';
 import Project from './pages/Portfolio';
 import Global from './pages/Global';
 import '.App.css';

 function App(){
    return (
        <Router>
            <Global/>
            <Routes>
                <Route path='/' element={<Home/>}/> 
                <Route path='/about' element={<About/>}/>
                <Route path='/project' element={<Project/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </Router>
    );
 }

 export default App;