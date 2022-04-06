import React from "react";
import styled from "styled-components";
import images from "../constants/images";
import Buttons from "./Buttons";

const Transform = () => {
   return (
      <StyledTransform>
         <div>
            <picture>
               <source media="(min-width: 768px)" srcSet={images.dTrans} />
               <img src={images.mTrans} alt="egg"/>
            </picture>
         </div>
         <article>
            <h2>Transform your brand</h2>
            <p>
               We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do
               most of the marketing for you.
            </p>
            {/* make the btn a component */}
            <Buttons color="red" bb="blue">
               Learn more
            </Buttons>
         </article>
         <div>
            <picture>
               <source media="(min-width: 768px)" srcSet={images.dStand} />
               <img src={images.mStand} alt="pink cup"/>
            </picture>
         </div>
         <article>
            <h2>Stand out to the right audience</h2>
            <p>
               Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your
               brand in digital places.
            </p>
            <button>Learn more</button>
         </article>
      </StyledTransform>
   );
};

const StyledTransform = styled.section`
   article {
      text-align: center;
      padding: 4rem 1rem;
      h2 {
         font-weight: 900;
         font-size: 2rem;
         margin-bottom: 25px;
      }

      p {
         font-weight: 600;
         color: var(--Dark-grayish-blue);
         margin-bottom: 25px;
      }
   }
`;

export default Transform;
