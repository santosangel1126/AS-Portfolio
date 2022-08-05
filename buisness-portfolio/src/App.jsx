 import {Routes, BrowserRouter as Router,  Route } from 'react-router-dom';
 import Home from '../src/pages/Home';
 import Contact from '../src/pages/About';
 import About from '../src/pages/About';
 import Project from '../src/pages/Portfolio';
 import Global from '../src/pages/Global';
 import '../src/App.css';

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