import React from "react";
import {StyledBtn} from '../styles/Button.styled'


const LearnMore = ({bg}) => {
  
   return (
      <StyledBtn bg={bg}>
         <a href="#">learn more</a>
         <div></div>
      </StyledBtn>
   );
};

export default LearnMore;
