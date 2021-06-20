import React from 'react'
import {Nav, NavbarContainer, NavLogo} from './NavbarElements'
import Logoimg from '../../images/Landingpage/logo.svg'

export const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo src={Logoimg} alt="logoimage">
                </NavLogo>
            </NavbarContainer>
        </Nav>
    );
}

export default Navbar;
