import classes from './Register.module.css'; 
import { useState } from 'react'; 
import { listOfFaculties } from "./listOfFaculties.js"; 
import "../../../index.css"; 

export default function RegisterForm() {
    const [action, setAction] = useState("Sign In");

    return(
        <form className={classes.container}>
            <div className={classes.header}>
                <div className={classes.text}>{action}</div>
                <div className={classes.underline}></div>
            </div>

            {action==="Sign In" ? null : 
                <input type="text" className={classes.input} placeholder='Name' name="name"></input>
            }

            {action==="Sign In" ? null :
                <input type="text" className={classes.input} placeholder="Surname" name="surname"></input>
            }

            {action==="Sign In" ? null : 
                <input type="number" className={classes.input} placeholder="Group" name="group"></input>
            }

            {action==="Sign In" ? null : 
                <select name="faculty" className={classes.selector}>
                    <option className={classes.option}>Faculty of</option>
                    {listOfFaculties.map(({ value, label, key }, index) => <option value={value} key={key}>{label}</option>)}
                </select>
            }

            <input type="email" className={classes.input} placeholder="Email" name="email"></input>

            <input type="password" className={classes.input} placeholder="Password" name="password"></input>

            {action==="Sign In" ? null : 
                <input type="password" className={classes.input} placeholder="Repeat password" name="repeatPassword"></input>
            }

            {action==="Sign Up" ? null : <div className={classes.forgotPassword}>Lost Password? <span>Click here!</span></div>}

            {action==="Sign In" ? 
                <div className={classes.submitContainer}>
                    <input className={classes.submitActive} type="submit" value="Sign In"></input>
                    <div className={classes.submitNoActive} onClick={() => setAction("Sign Up")}>Sign Up</div>
                </div>

                :

                <div className={classes.submitContainer}>
                    <div className={classes.submitNoActive} onClick={() => setAction("Sign In")}>Sign In</div>
                    <input className={classes.submitActive} type="submit" value="Sign Up"></input>
                </div>

            }

        </form>
    )
}