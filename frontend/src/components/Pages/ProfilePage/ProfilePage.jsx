import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import DesktopProfile from "./DesktopProfile";
import MobileProfile from "./MobileProfile";
import classes from "./ProfilePage.module.css"; 

export default function ProfilePage() {
    return(
        <>
            <Header />
            <div className={classes.mainContainer}>
                <DesktopProfile />
                <MobileProfile />
            </div>
            <Footer />
        </>
    )
}