import styled from "styled-components";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import GlobalStyles from "./styles/Global";
import images from "./constants/images";
import Transform from "./components/Transform";
import Graphic from "./components/Graphic";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
   return (
      <>
         <GlobalStyles />
         <StyledShowcase>
            <Navbar />
            <Header />
         </StyledShowcase>
         <Transform />
         <Graphic />
         <Testimonials />
         <Gallery />
         <Footer/>
      </>
   );
}
const StyledShowcase = styled.div`
   background: url(${images.mHeader});
   background-repeat: no-repeat;
   background-position: center;
   background-size: contain;
   height: 538px;

   @media (min-width: 768px) {
      background: url(${images.dHeader});
   }
`;

export default App;
