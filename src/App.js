import styled from "styled-components";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import GlobalStyles from "./styles/Global";

function App() {
   return (
      <>
         <GlobalStyles />
            <StyledHeader>
               <Navbar />
               <Header />
            </StyledHeader>
        
      </>
   );
}
const StyledHeader = styled.div`
background-color: red ;
min-height: 100vh ;
`

export default App;
