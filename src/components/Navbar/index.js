import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/perfume-description" activeStyle>
                        Descriptions
                    </NavLink>
                    <NavLink to="/perfume-reviews" activeStyle>
                        Review
                    </NavLink>
                    <NavLink to="/profile" activeStyle>
                        Profile
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};



export default Navbar;