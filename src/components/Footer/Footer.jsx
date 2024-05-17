import classes from "./Footer.module.css"; 
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";

export default function Footer() {
    return(
        <div className={classes.footerContainer}>
            <Navbar />
            <AboutUs />

        </div>
    )
}