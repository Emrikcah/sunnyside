import React from "react";
import styled from "styled-components";
import images from "../constants/images";


const Graphic = () => {
   return (
      
         <StyledGraphic>
            <article>
               <picture>
                  <source media="(min-width: 768px)" srcSet={images.dGraphic} />
                  <img src={images.mGraphic} alt="cherry" />
               </picture>
               <div>
                  <h2>Graphic Design</h2>
                  <p>
                     Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’
                     attention.
                  </p>
               </div>
            </article>
            <article>
               <picture>
                  <source media="(min-width: 768px)" srcSet={images.dPhoto} />
                  <img src={images.mPhoto} alt="orange" />
               </picture>
               <div>
                  <h2>Photography</h2>
                  <p> Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
               </div>
            </article>
         </StyledGraphic>
     
   );
};

const StyledGraphic = styled.section`
   article {
      position: relative;
   }

   div {
      position: absolute;
      bottom: 50px;
      left: 0;
      text-align: center;
      padding: 0 1rem;
   }
   h2,
   p {
      color: var(--Dark-desaturated-cyan);
   }

   h2 {
      font-weight: 900;
      letter-spacing: -0.2px;
      margin-bottom: 1.5rem;
   }
   p {
      font-size: 1rem;
   }

   @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;

      div {
         width: 400px;
         left: 0;
         right: 0;
         margin: auto;
      }
   }
`;

export default Graphic;
