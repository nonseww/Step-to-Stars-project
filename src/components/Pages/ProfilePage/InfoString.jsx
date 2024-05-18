import classes from "./ProfilePage.module.css"; 

const InfoString = ({ items }) => {
    return(
        !items.value ? null :  
        (<div className={classes.infoString}>
            <div className={classes.nameString} style={{display: "inline", whiteSpace: "pre"}}> {`${items.name}: `} </div>
            <div className={classes.valueString} style={{display: "inline"}}> {items.value} </div>
        </div>)
    )
}

export default InfoString; 