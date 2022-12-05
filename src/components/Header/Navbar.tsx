import { Link } from "react-router-dom";
import { Nav, IconList, Logo, InfoContainer } from "./Header.style";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { logout, userStateSelector } from "../../features/user/userSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector(userStateSelector);

  return (
    <>
      <Logo>
        <Link to="/">Logo</Link>
      </Logo>
      <Nav className="navbar">
        <ul>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/users">List Users</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            {auth ? (
              <>
                <InfoContainer>
                  <span className="info">Hi, {auth.name}</span>
                  <span>
                    <button
                      className="btn btn-warning"
                      onClick={() => dispatch(logout())}
                    >
                      Logout
                    </button>
                  </span>
                </InfoContainer>
              </>
            ) : (
              <Link to="/login">
                <button className="btn btn-danger">Login</button>
              </Link>
            )}
          </li>
        </ul>
        <IconList />
      </Nav>
    </>
  );
};

export default Navbar;
