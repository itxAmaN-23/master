import './App.css';
import Navbar from './components/Navbar';
import Home from './layouts/Home';
import ContactUs from './layouts/ContactUs';
import AboutUs from './layouts/AboutUs';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/about-us" element={<AboutUs/>} />
      </Routes>
    </>
  );
}

export default App;
