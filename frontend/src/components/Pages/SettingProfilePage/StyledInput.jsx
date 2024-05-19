import classes from "./SettingProfilePage.module.css"; 

const StyledInput = ({ items }) => {

    return( 
        <div className={classes.formGroup}>
            <label>{items.name}</label>
            <input form={items.child} type={items.type} defaultValue={items.value || ""} name={items.name} className="form-control input-lg" />
        </div>
    )
}

export default StyledInput; 