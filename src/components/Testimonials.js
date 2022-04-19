import React from "react";
import styled from "styled-components";
import images from "../constants/images";


const data = [
   {
      id: 1,
      imgSrc: images.emily,
      altText: "Emily R",
      text: " We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      jobTitle: "Marketing Director",
   },
   {
      id: 2,
      imgSrc: images.thomas,
      altText: "Thomas S",
      text: " Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      jobTitle: "Chief Operating Officer",
   },
   {
      id: 3,
      imgSrc: images.jennie,
      altText: "Jennie F",
      text: "  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jennie F.",
      jobTitle: "Business Owner",
   },
];

const Testimonials = () => {
   return (
   
         <StyledSection>
            <h3>Client testimonials</h3>
            <div>
               {data.map(({ id, imgSrc, altText, text, name, jobTitle }) => (
                  <article key={id}>
                     <img src={imgSrc} alt={altText} />
                     <p>{text}</p>
                     <h4>{name}</h4>
                     <p>{jobTitle}</p>
                  </article>
               ))}
            </div>
         </StyledSection>
      
   );
};

const StyledSection = styled.section`
   padding: 60px 25px;
   text-align: center;
   background-color: var(--OffWhite);

   h3,
   p,
   h5 {
      color: var(--Dark-grayish-blue);
   }

   h3 {
      font-size: 1rem;
      font-weight: 900;
      letter-spacing: 0.222rem;
      text-transform: uppercase;
      margin-bottom: 60px;
   }
   article {
      margin-bottom: 60px;
   }

   img {
      border-radius: 50%;
      width: 72px;
      margin: 0 auto 30px;
   }

   p:first-of-type {
      letter-spacing: -0.13px;
      margin-bottom: 30px;
   }

   h4 {
      font-weight: 900;
      letter-spacing: -0.13px;
      margin-bottom: 10px;
   }

   p:nth-of-type(2) {
      font-size: 0.875rem;
      letter-spacing: -0.1px;
   }

   @media (min-width: 768px) {
      /* max-width: 1440px; */
      padding: 140px;

      h3 {
         margin-bottom: 80px;
      }

      img {
         margin-bottom: 50px;
      }

      div {
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         gap: 50px;
      }

      p:first-of-type {
         /* font-size: 0.872rem; */
         margin-bottom: 80px;
      }
   }
`;

export default Testimonials;
