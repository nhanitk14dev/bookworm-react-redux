import Header from '../../components/header';
import Footer from '../../components/footer';
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