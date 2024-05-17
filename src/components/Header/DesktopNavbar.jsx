import { DesktopMenuItemsData } from "./DesktopMenuItemsData";
import DesktopMenuItems from "./DesktopMenuItems"; 

const DesktopNavbar = () => {
    return(
        <nav className="desktop-nav" style={{position: "absolute", right: "0", height: "100%", marginRight: "3vw"}}>
            <ul className="menus">
                {DesktopMenuItemsData.map((menu, index) => {
                    return <DesktopMenuItems items={menu} key={index} />
                })}
            </ul>
        </nav>
    );
};

export default DesktopNavbar; 