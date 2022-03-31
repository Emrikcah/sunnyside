import React, { useState } from "react";
import styled from "styled-components";
import Logo from './Logo'
import MenuButton from "./MenuButton";

const MobileNav = () => {

const [toggleMenu, setToggleMenu] = useState(false);

   return (
      <StyledMobileNav>
        <div className="nav-header">
           <Logo/>
           <MenuButton setToggleMenu={setToggleMenu} toggle={toggleMenu}/>
        </div>


        {toggleMenu && (


         <div className="links-container">
            <ul className="links">
               <li>
                  <a href="/">about</a>
               </li>
               <li>
                  <a href="/">services</a>
               </li>
               <li>
                  <a href="/">projects</a>
               </li>
               <li>
                  <a href="/">contact</a>
               </li>
            </ul>
         </div>
        )}
      </StyledMobileNav>
   );
};

const StyledMobileNav = styled.div`
  
  .nav-header{
     display: flex ;
     justify-content:space-between ;
     width: 100% ;
  }
   .links-container {
      display: flex ;
      flex-direction: column ;
      align-items:center ;
      text-align: center ;
      width: 100%;
      background-color: white;
   }

   @media (min-width: 768px) {
      display: none;
   }
`;

export default MobileNav;

//pass state to onclick in menubutton and send it back