import React from "react";
import styled from "styled-components";
import images from "../constants/images";

const Header = () => {
   return (
     
         <StyledHeader>
            <div>
               <h1>we are creatives</h1>
               <img src={images.arrowDown} alt="" />
            </div>
         </StyledHeader>
      
   );
};

const StyledHeader = styled.header`
   min-height: calc(538px - 89px);
   div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
   }

   h1 {
      margin-top: 60px;
      margin-bottom: 40px;
      text-transform: uppercase;
      color: var(--White);
      font-weight: 900;
      text-align: center;
      font-size: 2.5rem;
      letter-spacing: 8.75px;
   }

   @media (min-width: 768px) {
      h1 {
         margin-top: 100px;
         margin-bottom: 96px;
         font-size: 3.5rem;
      }
   }
`;

export default Header;
