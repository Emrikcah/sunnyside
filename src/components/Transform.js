import React from "react";
import styled from "styled-components";
import images from "../constants/images";

import LearnMore from './LearnMore'


const Transform = () => {
   return (
      <StyledTransform>
         <div>
            <picture className="order-change">
               <source media="(min-width: 768px)" srcSet={images.dTrans} />
               <img src={images.mTrans} alt="egg" />
            </picture>

            <article>
               <h2>Transform your brand</h2>
               <p>
                  We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that
                  do most of the marketing for you.
               </p>
              
             <LearnMore bg={"var(--Yellow)"}/>
            </article>
         </div>
         <div>
            <picture>
               <source media="(min-width: 768px)" srcSet={images.dStand} />
               <img src={images.mStand} alt="pink cup" />
            </picture>

            <article>
               <h2>Stand out to the right audience</h2>
               <p>
                  Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your
                  brand in digital places.
               </p>
               <LearnMore bg={"var(--Soft-red)"}/>
            </article>
         </div>
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

   @media (min-width: 768px) {
      div {
         display: grid;
         grid-template-columns: 1fr 1fr;
      }

      .order-change {
         order: 2;
      }

      article {
         align-self: center;
         text-align: left;
         padding: 120px;
         /* max-width: 445px; */

         h2 {
            font-size: 2.5rem;
         }

         p {
            letter-spacing: -0.13px;
         }
      }
   }
`;

export default Transform;
