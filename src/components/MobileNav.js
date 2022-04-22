import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import { StyledBtnNav } from "../styles/Button.styled";

const MobileNav = () => {
   const [toggleMenu, setToggleMenu] = useState(false);

   return (
      <StyledMobileNav>
         <div className="nav-header">
            <Logo />
            <MenuButton setToggleMenu={setToggleMenu} toggle={toggleMenu} />
         </div>

         {toggleMenu && (
            <div className="links-container">
               <div className="triangle"></div>
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
               </ul>
               <StyledBtnNav bgClr={"var(--Yellow)"}>contact</StyledBtnNav>
            </div>
         )}
      </StyledMobileNav>
   );
};

const StyledMobileNav = styled.div`
   position: relative;
   padding: 0 25px;

   .nav-header {
      display: flex;
      justify-content: space-between;
      width: 100%;
   }
   .links-container {
      position: absolute;
      top: 50px;
      right: 22px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      min-width: 329px;
      background-color: white;
   }
   
   .triangle {
    width: 0;
    height: 0;
    position: relative;
    border-left: 32px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 32px solid white;
    position: absolute;
    right: 0;
    top: -1.5rem;
}

   li,
   button {
      margin-top: 2rem;
   }

   button {
      margin-bottom: 2rem;
   }

   li {
   }

   a {
      font-size: 20px;
      color: var(--Dark-grayish-blue);
   }
   @media (min-width: 768px) {
      display: none;
   }
`;

export default MobileNav;

//pass state to onclick in menubutton and send it back
