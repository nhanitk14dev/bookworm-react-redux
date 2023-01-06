import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { useTheme } from "../app/hooks/useTheme";
const Layout = () => {
  const {theme} = useTheme();

  return (
    <div className={`theme-${theme}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
