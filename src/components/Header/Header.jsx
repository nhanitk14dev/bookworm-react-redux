import { HeaderSection, HeaderContainer } from "./HeaderStyles";
import  Navbar from "./Navbar";

const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer className="container">
        <Navbar />
      </HeaderContainer>
    </HeaderSection>
  );
}

export default Header;