import React from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <NavbarBrand>Codevian</NavbarBrand>
        <Navbar.Text className="mr-3 ml-3"><Link to="/">Posts</Link></Navbar.Text>
        <Navbar.Text className="ml-3"><Link to="/photos">Photos</Link></Navbar.Text>
      </Navbar>
    </>
  );
};

export default Header;
