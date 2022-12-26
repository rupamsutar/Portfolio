import classes from "./Navbar-icon.module.css";

const NavbarIcon = () => {
    return(
        <>
            <div className={classes.icon}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="25px" 
                    height="25px" 
                    viewBox="0 0 16 16" 
                    fill="#fff" 
                    class="bi bi-pentagon-half">
                    <path d="m8 1.288 6.842 5.56L12.267 15H8V1.288zM16 6.5 8 0 0 6.5 3 16h10l3-9.5z"/>
                </svg>
            </div>
        </>
    )
}

export default NavbarIcon;