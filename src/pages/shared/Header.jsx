import { Button, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/logo/iconmonstr-building-33.svg";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
        toast.success("You have logged out now");
      })
      .catch((e) => console.error(e));
  };

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white uppercase">
          Rakib's Consultancy
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink className="font-semibold text-[15px]" to="/">
          Home
        </NavLink>
        <NavLink className="font-semibold text-[15px]" to="/services">
          Services
        </NavLink>
        <NavLink className="font-semibold text-[15px]" to="/blog">
          Blog
        </NavLink>
        {user ? (
          <>
            <NavLink className="font-semibold text-[15px]" to="/addService">
              Add Service
            </NavLink>
            <NavLink className="font-semibold text-[15px]" to="/myReview">
              My Reviews
            </NavLink>
            <button
              className="font-semibold text-[16px]"
              onClick={handleLogOut}
            >
              log out
            </button>
          </>
        ) : (
          <NavLink className="font-semibold text-[15px]" to="/login">
            log in
          </NavLink>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
