import classes from "./Footer.module.css"; 
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";

//TODO: I need customize components' sizes in the Desktop and Mobile 

export default function Footer() {
    return(
        <div className={classes.footerContainer}>
            <Navbar />
            <AboutUs />

        </div>
    )
}