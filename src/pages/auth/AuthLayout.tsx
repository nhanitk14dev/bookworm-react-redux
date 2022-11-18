import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { AuthContainer } from './Auth.style';
  
const AuthLayout = () => {
  return (
    <>
      <Header />
      <AuthContainer>
        <Outlet />
      </AuthContainer>
      <Footer />
    </>
  );
}

export default AuthLayout;