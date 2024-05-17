import classes from "./Footer.module.css"; 
import { ItemsData } from "./ItemsData";

const Navbar = () => {
    return(
        <div className={classes.navbar}>
            <div className={classes.title}>
                Navigation
            </div>
    
            <div className={classes.navColumn}>
                {ItemsData.map(( menu, index ) => {
                    return <a href={menu.url} key={index}>{menu.title}</a>
                })}
            </div>
        </div>
    )
}

export default Navbar; 