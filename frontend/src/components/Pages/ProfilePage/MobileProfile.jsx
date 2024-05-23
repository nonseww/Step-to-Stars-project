import { useNavigate } from "react-router-dom"; 
import InfoString from "./InfoString";
import classes from "./ProfilePage.module.css"; 
import defaultImage from "../../Pictures/default_avatar.jpg"; 
import userData from "../../../userData/userData";
import SettingsIcon from "../../Pictures/profile_settings_icon.png"; 

const MobileProfile = () => {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate("/profile/setting"); 
    }

    return(
        <div className={classes.mobileProfileContainer}>
            <div className={classes.topContainer}>

                <div className={classes.imgContainer}>

                <img src={defaultImage} alt="" 
                    style={{height: "100%", width: "100%"}}>
                </img>

                </div>

                <div className={classes.usernameContainer}>
                    <div> {`${userData[0].value}\n`} </div>
                    <div> {`${userData[1].value}`} </div>
                </div>

                <div className={classes.settingsButtonContainer}>
                    <a role="button" className={classes.settingsButton} onClick={handleClick}>
                        <img src={SettingsIcon} alt="" style={{width: "100%", height: "100%"}}></img>
                    </a> 
                </div>

            </div>

            <div className={classes.userInfoContainer}>
                {userData.slice(2).map((title, index) => {
                    return <InfoString items={title} key={index} />
                })}
            </div>

        </div>
    )
}

export default MobileProfile; 