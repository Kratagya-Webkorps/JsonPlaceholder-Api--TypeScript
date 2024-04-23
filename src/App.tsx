import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './components/Posts';
import NavBar from './components/NavBar';
import Users from './components/Users';
import Photos from './components/Photos';
import Todos from './components/Todos';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Users />}/>
          <Route path="/Users" element={<Users />}/>
          <Route path="/Posts" element={<Posts />}/>   
          <Route path="/Photos" element={<Photos />}/>   
          <Route path="/Todos" element={<Todos />}/>   
        </Routes>
        {/* <Posts /> */}
      </Router>
    </>
  );
}

export default App;
