import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Service from './components/Service';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
     <div>
      <Routes>
       <Route exact path="/" Component={Home}/>
       <Route path="/Contact" Component={Contact} />
       <Route path="/About" Component={About} />
       <Route path="/Service" Component={Service} />
       <Route component={NotFound} />
      </Routes>
     </div>
    </Router>
  )
}

export default App
