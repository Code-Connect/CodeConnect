import React from "react";
import {NavbarHeader, Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";


const NavBar = () => (
    <Navbar inverse>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/home">Code Connect</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
            <Nav>
                <NavItem href="/contributor">
                    Contributor
                </NavItem>
                <NavItem href="/mentor">
                    Mentor
                </NavItem>
                <NavItem href="/about">
                    About
                </NavItem>

            </Nav>

            <Nav>
                <NavItem href="/contact">
                    Login
                </NavItem>
                <NavDropdown title="Profile"
                             id="basic-nav-dropdown">
                    <MenuItem href="/yourtasks">
                        Your Tasks
                    </MenuItem>

                    <MenuItem divider/>
                    <MenuItem href="/auth/github"> Logout
                    </MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavBar;
