import { HeaderSection, HeaderContainer } from "./Header.style";
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