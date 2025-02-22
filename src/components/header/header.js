
import React , { useState } from 'react';
import '../header/header.css';
import  Logo from '../../assets/images/logo_1.jpg';
import { MdOutlineLightMode,MdOutlineDarkMode ,MdPeopleAlt } from "react-icons/md";
const Header = () => { 
   const [isDarkMode, setIsDarkMode] = useState(false);
   
   const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      document.body.classList.toggle('dark-mode', !isDarkMode);
    };
    return (
        <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="header-left">
               <a href='#' id='logo' ><img src={Logo} /></a>
            </div>
            <div className='header-right'>
               <a href='#' id='profiletracker'>Profile Tracker</a>
               <a href='#' id='aboutus'><MdPeopleAlt /> Aboutus</a>
               <button id='mode' onClick={toggleDarkMode}>
               {isDarkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}</button>
               <button id='login'>Login</button>
               
            </div>
        </header>
    );
}
export default Header;