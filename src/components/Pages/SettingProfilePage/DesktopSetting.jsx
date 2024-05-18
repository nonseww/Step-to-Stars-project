import classes from "./SettingProfilePage.module.css"; 
import UploadFile from "./UploadFile.tsx";
import defaultImage from "../../Pictures/default_avatar.png"; 

const DesktopSetting = () => {
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

                    <button onClick={{}} className={classes.btn}>
                        Delete
                    </button> 

                </div>
            </div>
        </div>
    )
}

export default DesktopSetting; 