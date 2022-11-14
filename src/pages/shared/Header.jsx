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
    <Navbar fluid={true} rounded={true} className="bg-transparent">
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          className="mr-3 h-6 md:hidden lg:block lg:h-9"
          alt="Flowbite Logo"
        />
        <span></span>
        <span className="text-center whitespace-nowrap md:text-base lg:text-2xl font-bold dark:text-white uppercase">
          Rakib's <span className="md:block lg:inline-block">Consultancy</span>
        </span>
      </Link>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            user ? (
              user.photoURL ? (
                <img
                  className="h-10 w-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <FaUserCircle className="h-10 w-10 rounded-full" />
              )
            ) : (
              <FaUserCircle
                title="User not logged in"
                className="h-10 w-10 rounded-full"
              />
            )
          }
        >
          {user && user.email && (
            <>
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item className="text-left font-semibold text-sm">
                <Link>View Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item
                className="text-left font-semibold text-sm"
                onClick={handleLogOut}
              >
                log out
              </Dropdown.Item>
            </>
          )}
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
