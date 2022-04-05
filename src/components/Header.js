import React from "react";
import styled from "styled-components";
import { Container } from "../styles/Container.styled";
import images from "../constants/images";

const Header = () => {
   return (
      <StyledHeader>
         <Container>
            <div>
               <h1>we are creatives</h1>
               <img src={images.arrowDown} alt="" />
            </div>
         </Container>
      </StyledHeader>
   );
};

const StyledHeader = styled.header`
   div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
   }

   h1 {
      margin-top: 60px;
      margin-bottom: 40px ;
      text-transform: uppercase;
      color: var(--White);
      font-weight: 900;
      text-align: center;
      font-size: 2.5rem;
      letter-spacing: 10px;
   }
`;

export default Header;
