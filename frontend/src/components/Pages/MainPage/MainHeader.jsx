import classes from "./MainHeader.module.css"; 

const MainHeader = () => {
    return( 
    <div className={classes.mainHeader}>
        <div className={classes.mainTextContainer}>
            <div className={classes.mainTitleContainer}>
                <div className={classes.platypi_mainText}>
                    Believe in yourself.
                </div>
            </div>

            <div className={classes.mainUnderTitleContainer}>
                <div className={classes.mainUnderText}>
                Because every day you find yourself in different <strong>Situations</strong> and resolutely take on 
                the assigned <strong>Tasks</strong>. With every <strong>Action</strong> you take, step by step, 
                you bring yourself closer to your desired <strong>Result</strong>.
                </div>
            </div>
        </div>
    </div>
    )
}

export default MainHeader; 