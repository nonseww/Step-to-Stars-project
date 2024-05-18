import Header from "../../Header/Header"; 
import DesktopSetting from "./DesktopSetting";
import Footer from "../../Footer/Footer"; 
import classes from "./SettingProfilePage.module.css"; 

export default function SettingProfilePage() {
    return(
        <>
            <Header />
            <div className={classes.mainContainer}>
                <DesktopSetting />
            </div>
            <Footer />
        </>
    )
}

