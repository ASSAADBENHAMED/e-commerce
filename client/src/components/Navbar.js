import { Fragment, React } from "react";
import { Link } from "react-router-dom";
import { logoutAction } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import '../Styles/Navbar.css';
const Navbar = () => {
  const { isAuth, personInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      {isAuth ? (
        <Fragment>
          <Link to="/profile">{personInfo.name}</Link>
          <button onClick={logout}>Logout</button>
        </Fragment>
      ) : (
        <Fragment>
          <Link to="/login">Login</Link>|<Link to="/register">Register</Link>
        </Fragment>
      )}
    </div>
  );
};

export default Navbar;
