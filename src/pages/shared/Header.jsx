import { Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/logo/iconmonstr-building-33.svg";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";

const Header = () => {
  useTitle("Header");
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
        toast.success("You have logged out now");
      })
      .catch((e) => console.error(e));
  };

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src={logo}
          className="mr-3 h-6 md:hidden lg:block lg:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap md:text-base lg:text-2xl font-bold dark:text-white uppercase">
          Rakib's <span className="md:block lg:inline-block">Consultancy</span>
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            user && user.photoURL ? (
              <img
                className="h-10 w-10 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <FaUserCircle className="h-10 w-10 rounded-full" />
            )
          }
        >
          <Link className="px-4">View Profile</Link>
        </Dropdown>
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
              className="font-semibold text-left text-[16px]"
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
