import styled from "styled-components";

export const StyledBtnNav = styled.button`
   border-radius: 28px;
   border: none;
   cursor: pointer;
   font-size: 16px;
   font-weight: 900;
   padding: 15px 30px;
   text-transform: uppercase;
   background-color: ${(props) => props.bgClr};

   &:hover {
      background-color: ${(props) => props.hbgClr};
      color: ${(props) => props.clr};
   }
`;

export const StyledBtn = styled.div`
   display: inline-flex !important;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   text-transform: uppercase;
   margin-bottom: 64px;
   a {
      font-family: "Fraunces", serif;
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 1px;
      /* line-height: 25px; */
      padding: 0 10px;
      color: var(--Very-dark-desaturated-blue);
      z-index: 2;
   }

   div {
      background-color: ${(props) => props.bg};
      opacity: 0.25;
      width: 90%;
      height: 8px;
      transform: translateY(-0.5rem);
      border-radius: 28px;
   }
`;
//I used !important to override the parent display grid