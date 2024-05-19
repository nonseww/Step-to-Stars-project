import { useNavigate } from "react-router-dom"; 
import StyledInput from "./StyledInput";
import classes from "./SettingProfilePage.module.css"; 
import UploadFile from "./UploadFile.tsx";
import userData from "../../../userData/userData.js";
import blacklist from "./blacklist.js";
import defaultImage from "../../Pictures/default_avatar.png"; 

const DesktopSetting = () => {

    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate("/profile"); 
    }

    const handlePhotoClick = () => {
        console.log("delete"); 
    }
    return(
        <div className={classes.profileContainer}>
            <div className={classes.photoContainer}>

                <div className={classes.imgContainer}>

                    <img src={defaultImage} alt="" 
                        style={{height: "100%", width: "100%"}}>
                    </img>

                </div>

                <div className={classes.buttonsContainer}>

                    <UploadFile />

                    <button onClick={handlePhotoClick} className={classes.btn}>
                        Delete
                    </button> 

                </div>
            </div>

            <div className={classes.labelsForm}>

                <div className={classes.title}>Settings</div>

                <form id="desktopSettings" className={classes.labelsContainer}>

                    {userData.map((title, index) => {
                        return (blacklist.indexOf(title.name) > -1 ? null : <StyledInput items={title} key={index} 
                            child="desktopSetting" />)
                    })}

                    <div className={classes.submitContainer}>

                        <button type="button" className={classes.btn} onClick={handleClick}> Escape </button>
                        <input form="desktopSettings" className={classes.btn} type="submit" value="Save"></input>

                    </div>

                </form>

            </div>
        </div>
    )
}

export default DesktopSetting; 