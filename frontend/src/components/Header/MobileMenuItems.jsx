import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown"; 

const MobileMenuItems = ({items}) => {
    const [dropdown, setDropdown] = useState(false); 
    let ref = useRef(); 

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false); 
            }
        }; 
        document.addEventListener("mousedown", handler); 
        document.addEventListener("touchstart", handler); 

        return() => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler); 
        }; 
    }, [dropdown]); 

    return(
        <li className="menu-items" ref={ref}>
            <>
                <button type="mobile-nav__menu-button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"}
                    onClick={() => setDropdown((prev) => !prev)}>

                    {items.title}{" "}

                </button>

                <Dropdown submenus={items.submenu} dropdown={dropdown}/>
            </>
        </li>
    ); 
};

export default MobileMenuItems; 