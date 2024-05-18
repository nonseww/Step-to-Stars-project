import { useNavigate } from "react-router-dom"; 
import InfoString from "./InfoString";
import classes from "./ProfilePage.module.css"; 
import defaultImage from "../../Pictures/default_avatar.png"; 
import userData from "../../../userData/userData";
import SettingsIcon from "../../Pictures/profile_settings_icon.png"; 

const DesktopProfile = () => {

    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate("/profile/setting"); 
    }

    return(
        <div className={classes.profileContainer}>
            <div className={classes.imgContainer}>

                <img className={classes.logo} src={defaultImage} alt="" 
                    style={{height: "100%", width: "100%", borderRadius: "300px"}}>
                </img>

            </div>

            <div className={classes.infoContainer}>

                <div className={classes.settingsButtonContainer1000px}>
                        <a role="buttton" className={classes.settingsButton} onClick={handleClick}>
                            <img src={SettingsIcon} alt="" style={{width: "100%", height: "100%"}}></img>
                        </a>
                </div>

                <div className={classes.usernameContainer}>
                    {`${userData[0].value}  ${userData[1].value}`}
                </div>

                <div className={classes.userInfoContainer}>

                    {userData.slice(2).map((title, index) => {
                        return <InfoString items={title} key={index} />
                    })}

                </div>

            </div>

            <div className={classes.settingsButtonContainer1080px}>
                    <a role="buttton" className={classes.settingsButton} onClick={handleClick}>
                        <img src={SettingsIcon} alt="" style={{width: "100%", height: "100%"}}></img>
                    </a>
                </div>
        </div>
    )
}

export default DesktopProfile; 