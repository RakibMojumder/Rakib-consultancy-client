import { Button, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/iconmonstr-building-33.svg";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then({})
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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>

        {user && user.email ? (
          <button onClick={handleLogOut}>log out</button>
        ) : (
          <NavLink to="/login">log in</NavLink>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
