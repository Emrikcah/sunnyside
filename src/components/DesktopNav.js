import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

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
            <li>
               <a href="/">contact</a>
            </li>
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

   @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
`;

export default DesktopNav;
