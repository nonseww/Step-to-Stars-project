import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown"; 
import defaultImage from "../Pictures/default_avatar.png"; 

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
                style={{display: "block", overflow: "hidden", width: "max(6vh, 6vw)", height: "max(6vh, 6vw)",
                padding: "max(1vw, 1vh)"}}
                    onClick={() => setDropdown((prev) => !prev)}>

                    <img className="headerLogo" src={defaultImage} alt=""
                    style={{height: "100%", width: "100%", borderRadius: "300px"}}>
                    </img>{""}

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