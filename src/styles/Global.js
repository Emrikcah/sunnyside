import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


:root{
   --Soft-red: hsl(7, 99%, 70%);
   --Yellow: hsl(51, 100%, 49%);
   --Dark-desaturated-cyan: hsl(167, 40%, 24%);
   --Dark-blue: hsl(198, 62%, 26%);
   --Dark-moderate-cyan: hsl(168, 34%, 41%);

   --Very-dark-desaturated-blue: hsl(212, 27%, 19%);
   --Very-dark-grayish-blue: hsl(213, 9%, 39%);
   --Dark-grayish-blue: hsl(232, 10%, 55%);
   --Grayish-blue: hsl(210, 4%, 67%);
   --White: hsl(0, 0%, 100%);
   --OffWhite: hsl(0, 0%, 97%);
   }

*{
   margin: 0;
   padding:0 ;
   box-sizing:border-box ;
   scroll-behavior: smooth;
}

body{
    font-family: 'Barlow', sans-serif;
    font-size: 18px ;
    
}

ul{
   list-style: none ;
}

a{
   text-decoration: none ;
}

h1,h2,h3,h4,h5,h6{
   font-family: 'Fraunces', serif;
}

p{
   line-height: 1.6 ;
}

img{
   max-width:100% ;
   display: block;
}

`;

export default GlobalStyles;
//
