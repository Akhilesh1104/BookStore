import React from 'react';
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './Components/Signup';
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import About from './Components/About';
import {Toaster} from "react-hot-toast";
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser,setAuthUser] = useAuth();

  return (
    <>
   <div>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={authUser ? <Courses />:<Navigate to="/signup" />} />
      <Route path="/signup" element={<><Navbar /><Signup /><Footer /></>} />
      <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
      <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
    </Routes>
    <Toaster />
    </div>
    </>
  );
}  

export default App;