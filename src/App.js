
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import DashBoard from './pages/DashBoard/index';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Signup from './pages/Signup/index';
export const MyContext = createContext();
function App() {
  
  const [showheaderfooter, setshowheaderfooter] = useState(true);

  const values = {
    showheaderfooter,
    setshowheaderfooter,
  };
  return (
    <>
     <BrowserRouter>
      <MyContext.Provider value={values}>
        {showheaderfooter && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/DashBoard" element={<DashBoard />} />
        
         
        </Routes>
        {showheaderfooter && <Footer />}
      </MyContext.Provider>
    </BrowserRouter>
    
    </>
  );
}

export default App;
