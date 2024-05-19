import Header from "../../Header/Header"; 
import DesktopSetting from "./DesktopSetting";
import MobileSetting from "./MobileSetting";
import Footer from "../../Footer/Footer"; 
import classes from "./SettingProfilePage.module.css"; 

export default function SettingProfilePage() {
    return(
        <>
            <Header />
            <div className={classes.mainContainer}>
                <DesktopSetting />
                <MobileSetting />
            </div>
            <Footer />
        </>
    )
}

