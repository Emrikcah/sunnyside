import React from "react";
import { Container } from "../styles/Container.styled";

import styled from "styled-components";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
   return (
      <StyledNavbar>
         <Container>
            <DesktopNav />

            <MobileNav />
         </Container>
      </StyledNavbar>
   );
};

const StyledNavbar = styled.nav`
   padding: 30px 0;
`;

export default Navbar;
