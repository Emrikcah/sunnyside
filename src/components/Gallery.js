import React from "react";
import styled from "styled-components";
import images from "../constants/images";

const data = [
   {
      id: "1",
      smImg: images.mMilkbottles,
      lgImg: images.dMilkbottles,
      altText: "milk bottles",
   },
   {
      id: "2",
      smImg: images.mOrange,
      lgImg: images.dOrange,
      altText: "orange",
   },
   {
      id: "3",
      smImg: images.mCone,
      lgImg: images.dCone,
      altText: "cone",
   },
   {
      id: "4",
      smImg: images.mSugar,
      lgImg: images.dSugar,
      altText: "sugar cubes",
   },
];

const Gallery = () => {
   return (
      <StyledSection>
         {data.map(({ id, smImg, lgImg, altText }) => (
            <article key={id}>
               <img className="sm" src={smImg} alt={altText} />
               <img className="lg" src={lgImg} alt={altText} />
            </article>
         ))}
      </StyledSection>
   );
};

const StyledSection = styled.section`
   display: grid;
   grid-template-columns: 1fr 1fr;

   .lg {
      display: none;
   }

   @media (min-width: 768px) {
      .sm{
         display: none;
      }
      .lg {
         display: block;
      }
   }
`;

export default Gallery;
