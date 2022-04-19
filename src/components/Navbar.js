import React from "react";


import styled from "styled-components";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
   return (
   
         <StyledNavbar>
            <DesktopNav />

            <MobileNav />
         </StyledNavbar>
      
   );
};

const StyledNavbar = styled.nav`
   padding: 30px 0;
`;

export default Navbar;
