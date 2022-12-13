import { Link } from "react-router-dom";
import { Nav, IconList, Logo, InfoContainer } from "./header/Header.style";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { logoutAction } from "../actions";
import { useCallback } from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((state) => state.authState);

  const handleSignOut = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);

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
            {auth?.isLoggedIn ? (
              <>
                <InfoContainer>
                  <span className="info">Hi, {auth.name}</span>
                  <span>
                    <button className="btn btn-warning" onClick={handleSignOut}>
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
