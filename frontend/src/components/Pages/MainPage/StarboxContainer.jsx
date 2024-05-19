import classes from "./StarboxContainer.module.css"; 

const StarboxContainer = ({ letter, backgroundColorAll, ContainerBorderColor, backgroundColorLetter, titleText, titleColor, text}) => {
    return(
        <div className={classes.MobileContainer}>

            <div className={classes.BoxNameContainer}>
                <div className={classes.BoxName} style={{ color: titleColor }}>
                    {titleText}
                </div>
            </div>

            <div className={classes.MainContainer} style={{ backgroundColor: backgroundColorAll, borderColor: ContainerBorderColor }}>
                <div className={classes.topContainer}>
                    <div className={classes.letterContainer} style={ {backgroundColor: backgroundColorLetter }}>
                        <div className={classes.letter}>
                            {letter}
                        </div>
                    </div>
                </div>

                <div className={classes.textContainer}>
                    <div className={classes.textFont} style={{color: titleColor, borderBottom: 0 }}>
                        {text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StarboxContainer; 