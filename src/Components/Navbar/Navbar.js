import React from 'react';
import classes from './Navbar.module.css';
import NavbarIcon from './Navbar-icon';
import NavbarContent from './Navbar-content';

const Navbar = () => {
    return (
        <>
        <div className={classes.nav}>
            <NavbarIcon />
            <NavbarContent />
        </div>
        </>
    )
}

export default Navbar