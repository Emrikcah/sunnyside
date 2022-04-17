import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
import {StyledBtn} from '../styles/Button.styled'

const DesktopNav = () => {
   return (
      <StyledDesktopNav>
         <div>
            <Logo />
         </div>
         <ul>
            <li>
               <a href="/">about</a>
            </li>
            <li>
               <a href="/">services</a>
            </li>
            <li>
               <a href="/">projects</a>
            </li>
           <StyledBtn bgClr={'var(--White)'}>contact</StyledBtn>
         </ul>
      </StyledDesktopNav>
   );
};

const StyledDesktopNav = styled.div`
   display: none;
   li {
      display: inline-block;
      padding: 0px 20px ;
   }

   a{
      color: var(--White);
   }

   @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
`;

export default DesktopNav;
