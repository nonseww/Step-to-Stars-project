import { MobileMenuItemData } from "./MobileMenuItemsData";
import MobileMenuItems from "./MobileMenuItems"; 

const MobileNavbar = () => {
    return(
        <nav className="mobile-nav" style={{position: "absolute", right: "0", height: "100%", marginRight: "3vw"}}>
            <ul className="menus">
                {MobileMenuItemData.map((menu, index) => {
                    return <MobileMenuItems items={menu} key={index} />
                })}
            </ul>
        </nav>
    ); 
}; 

export default MobileNavbar; 