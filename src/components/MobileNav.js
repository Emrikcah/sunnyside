import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import { StyledBtn } from "../styles/Button.styled";

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
               <StyledBtn bgClr={'var(--Yellow)'}>contact</StyledBtn>
            </div>
         )}
      </StyledMobileNav>
   );
};

const StyledMobileNav = styled.div`
   position: relative;
   padding: 0 40px;

   .nav-header {
      display: flex;
      justify-content: space-between;
      width: 100%;
   }
   .links-container {
      position: absolute;
      top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100%;
      background-color: white;
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
