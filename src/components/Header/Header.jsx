import { useState, useEffect } from 'react';
import DesktopNavbar from "./DesktopNavbar"; 
import MobileNavbar from "./MobileNavbar"; 
import "./dropdownMenu.css"; 
import classes from './Header.module.css'; 

export default function Header() {
    const breakpoint = 800; 

    const[width, setWidth] = useState(window.innerWidth); 

    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);  
        }; 
        window.addEventListener('resize', handleResize); 
        return () => {
            window.removeEventListener('resize', handleResize); 
        }; 
    }, []); 
    
    return(
        <header className={classes.header}>
            <div className={classes.headerContainer}>

                <div className={classes.caveat_headerText} style={width < breakpoint ? {fontSize: "max(4.2vh, 4vw)"} : null}>
                    <a className={classes.headerHrefStyle} href="/">Step To Stars</a>
                </div>

                {(width < breakpoint) ? <MobileNavbar /> : <DesktopNavbar />}

            </div>
        </header>
    )
}