import React from "react";
import styled from "styled-components";
import images from "../constants/images";

const Logo = () => {
   return (
      <StyledLogo>
         <img className="color" src={images.logo} alt="" />
      </StyledLogo>
   );
};

const StyledLogo = styled.div`
   img {
      height: 24px;

      @media (min-width: 768px) {
         height: 33px;
      }
   }
`;

export default Logo;
