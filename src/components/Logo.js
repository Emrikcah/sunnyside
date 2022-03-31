import React from "react";
import styled from "styled-components";
import images from '../constants/images'


const Logo = () => {
   return (
      <StyledLogo>
         <img src={images.logo} alt="" />
      </StyledLogo>
   );
};

const StyledLogo = styled.div`
   img {
      height: 24px ;
   }
`;

export default Logo;