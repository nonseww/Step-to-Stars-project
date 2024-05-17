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
            {items.submenu ? (
            <>
                <a role="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} 
                style={{display: "block", overflow: "hidden", width: "max(5.3vh, 5.3vw)", height: "max(5.3vh, 5.3vw)",
                padding: "max(1vw, 1vh)"}}
                    onClick={() => setDropdown((prev) => !prev)}>

                    <img className="headerLogo"></img>{""}

                </a>

                <Dropdown submenus={items.submenu} dropdown={dropdown}/>
                </>
            ) : (
                <a href={items.url}>{items.title}</a>
            )}
        </li>
    ); 
};

export default MobileMenuItems; 