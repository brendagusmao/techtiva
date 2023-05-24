import React from 'react';
import { useEffect, useState } from 'react';
// import MyContext from '../context/MyContext';
import { BsFillGridFill, BsChevronContract } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";
import { RiPagesFill } from "react-icons/ri";
import { MdPermContactCalendar } from "react-icons/md";
import '../../css/Header.css';

function ToggleMenu() {
   const [menuState, setMenuState] = useState('closed');
//    const { languageMode } = useContext(MyContext);

   function toggleMenu() {
     setMenuState(menuState === 'closed' ? 'open' : 'closed');
   }
 
   useEffect(() => {
     const nav = document.querySelector('.toggle');
 
     if (menuState === 'open') {
       nav.style.display = 'flex';
     } else {
       nav.style.display = 'none';
     }
   }, [menuState]);

  return  (
    <>
        <div onClick={toggleMenu} className="buttontoggle">
            {menuState === 'closed' ? <BsFillGridFill className='hamburger' /> : <BsChevronContract className='hamburger' />}
        </div>
          <div className="toggle">
            <ul>
              <li><SiAboutdotme className="icontoggle" /><a onClick={toggleMenu} href="#home">home</a></li>
              <li><SiAboutdotme className="icontoggle" /><a onClick={toggleMenu} href="#about">about</a></li>
              <li><RiPagesFill className="icontoggle" /><a onClick={toggleMenu} href="#projects">projects</a></li>
              <li><MdPermContactCalendar className="icontoggle" /><a onClick={toggleMenu} href="#contact">contact</a></li>
            </ul>
          </div>
    </>
  )
}
 
export default ToggleMenu;