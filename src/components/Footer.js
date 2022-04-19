import React from "react";
import styled from "styled-components";
import images from "../constants/images";

const Footer = () => {
   return (
      <StyledFooter>
         
         <img className="logo-footer" src={images.logoFooter} alt="footer logo" />
         <div>
            <ul>
               {["about", "services", "projects"].map((item, index) => (
                  <li key={index}>{item}</li>
               ))}
            </ul>
            <article>
               {[images.fb, images.insta, images.twit, images.pin].map((item, index) => (
                  <article key={index}>
                     <img className="icon" src={item} alt="icon" />
                  </article>
               ))}
            </article>
         </div>
      </StyledFooter>
   );
};

const StyledFooter = styled.footer`
   background-color: var(--Dark-moderate-cyan);
   text-align: center;
   padding: 80px 30px;

   .logo-footer {
      height: 33px;
      margin-bottom: 25px;
      display: inline-block;
   }

   .icon:hover{
      cursor: pointer;
      filter: brightness(0) invert(1) ;
   }
   

   ul {
      display: flex;
      justify-content: space-between;
   }

   li {
      margin: 0 8px 80px;
      text-transform: capitalize;
      color: var(--light-cyan);
      &:hover {
         color: var(--White);
      }

      cursor: pointer;
   }

   article {
      display: flex;
      justify-content: center;
      margin: 0 12px;
   }

   @media (min-width: 768px) {
      ul {
         justify-content: center;
      }

      li {
         margin-left: 3rem;
      }
   }
`;

export default Footer;
