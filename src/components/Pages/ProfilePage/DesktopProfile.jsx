import InfoString from "./InfoString";
import classes from "./ProfilePage.module.css"; 
import defaultImage from "../../Pictures/default_avatar.png"; 
import userData from "../../../userData/userData";

const DesktopProfile = () => {
    return(
        <div className={classes.profileContainer}>
            <div className={classes.imgContainer}>

                <img className={classes.logo} src={defaultImage} alt="" 
                    style={{height: "100%", width: "100%", borderRadius: "300px"}}>
                </img>

            </div>

            <div className={classes.infoContainer}>

                <div className={classes.usernameContainer}>
                    {`${userData[0].value}  ${userData[1].value}`}
                </div>

                <div className={classes.userInfoContainer}>

                    {userData.slice(2).map((title, index) => {
                        return <InfoString items={title} key={index} />
                    })}

                </div>

            </div>
        </div>
    )
}

export default DesktopProfile; 