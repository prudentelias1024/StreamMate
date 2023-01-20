
import './App.css';
import Browse from './components/Browse';
import Hero from './components/Hero';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import {  Routes, Route } from 'react-router-dom';
function App() {
  
  return (
    <Routes>
  

    <Route path="/" element={<Hero/>}/>
    <Route path="/browse" element={<Browse/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/signup" element={<SignUpPage/>}/>
    {/* <Route path="*" element={<Page404/>}/> */}
    </Routes>

   
    
  );
}

export default App;
