import { Outlet } from "react-router-dom";
import { AuthContainer } from "./AuthStyles";
import Header from './../../components/header';
import Footer from './../../components/footer';

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
};

export default AuthLayout;
