import { Button, Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/iconmonstr-building-33.svg";

const Header = () => {
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
        <NavLink to="/login">Log in</NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
