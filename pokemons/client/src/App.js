import logo from './logo.svg';
import './App.css';
import LandingPage from './components/Landing/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
 <BrowserRouter>
    <Routes>
  <Route path="/" element={<LandingPage></LandingPage>}/>
  <Route path='/home' element={<Home></Home>}/>


    </Routes>
 
 
 
 </BrowserRouter>
  );
}

export default App;
