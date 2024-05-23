import classes from './Register.module.css'; 
import { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import { listOfFaculties } from "./listOfFaculties.js"; 
import { listOfGroups } from './listOfGroups.js';
import "../../../index.css"; 


export default function RegisterForm(props) {
    
    const [action, setAction] = useState("Sign In");
    const [name, setName] = useState(""); 
    const [surname, setSurname] = useState(""); 
    const [group, setGroup] = useState(""); 
    const [faculty, setFaculty] = useState("Faculty of"); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [repeat_password, setRepeat_password] = useState(""); 

    const group_is_correct = () => {
        return (listOfGroups.indexOf(group) !== -1); 
    }

    const all_not_null = () => {
        return (name && surname && group && faculty && password && repeat_password); 
    }

    const passwords_at_same = () => {
        return (password === repeat_password); 
    }


    function signInUser(event) {
        axios({
            method: "POST",
            url: "/users/login", 
            data: {
                email: email,
                password: password
            }
        })
        .then((response) => {
            props.setToken(response.data.access_token)
            window.location.href = "/"; 
        }).catch((error) => {
            if (error.response) {
                console.log(error.response); 
                console.log(error.response.status); 
                console.log(error.response.headers); 
            }
        })

        setEmail(""); 
        setPassword(""); 
        event.preventDefault(); 
    }

        function signUpUser(event) {
        axios({
            method: "POST",
            url: "/users/register", 
            data: {
                name: name,
                surname: surname, 
                group: group, 
                faculty: faculty, 
                email: email,
                password: password, 
            }
        })
        .then((response) => {
            props.setToken(response.data.access_token)
            window.location.href = "/"; 
        }).catch((error) => {
            if (error.response) {
                console.log(error.response); 
                console.log(error.response.status); 
                console.log(error.response.headers); 
            }
        })
        setName(""); 
        setSurname(""); 
        setGroup("");
        setFaculty("Faculty of");
        setEmail("");
        setPassword("");
        setRepeat_password(""); 
        event.preventDefault(); 

    }

    return(
        <form className={classes.container}>
            <div className={classes.header}>
                <div className={classes.text}>{action}</div>
                <div className={classes.underline}></div>
            </div>

            {action==="Sign In" ? null : 
                <>

                <input onChange={(e) => setName(e.target.value)}
                      type="text" 
                    className={classes.input} 
                    placeholder='Name' 
                    name="name"
                    text={name}
                    value={name} />

                <input onChange={(e) => setSurname(e.target.value)}
                    type="text" 
                    className={classes.input} 
                    placeholder="Surname" 
                    name="surname"
                    text={surname}
                    value={surname} />

                <input onChange={(e) => setGroup(e.target.value)}
                    type="number" 
                    className={classes.input} 
                    placeholder="Group" 
                    name="group"
                    text={group}
                    value={group} />

                <select onChange={(e) => setFaculty(e.target.value)}
                    name="faculty" 
                    className={classes.selector}>
                    text={name}
                    value={name}
                    <option className={classes.option} value="">Faculty of</option>
                    {listOfFaculties.map(({ value, label, key }, index) => <option value={value} key={key}>{label}</option>)}
                </select>

                <input onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    className={classes.input} 
                    placeholder="Email" 
                    name="email"
                    text={email}
                    value={email} />

                <input onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    className={classes.input} 
                    placeholder="Password" 
                    name="password"
                    text={password}
                    value={password} />

                <input onChange={(e) => setRepeat_password(e.target.value)}
                    type="password" 
                    className={classes.input} 
                    placeholder="Repeat password" 
                    name="repeat_password"
                    text={repeat_password}
                    value={repeat_password} />
                
            
                </>

            }

            {action==="Sign Up" ? null :

            <>

            <input onChange={(e) => setEmail(e.target.value)}
                type="email" 
                className={classes.input} 
                placeholder="Email" 
                name="email"
                text={email}
                value={email} />

            <input onChange={(e) => setPassword(e.target.value)}
                type="password" 
                className={classes.input} 
                placeholder="Password" 
                name="password"
                text={password}
                value={password} />
            
            </>

            }

            {action==="Sign Up" ? null : <div className={classes.forgotPassword}>Lost Password? <span>Click here!</span></div>}

            {action==="Sign In" ? 
                <div className={classes.submitContainer}>
                    <input onClick={signInUser}
                        className={classes.submitActive} 
                        type="submit" 
                        value="Sign In" />

                    <div className={classes.submitNoActive} onClick={() => setAction("Sign Up")}>Sign Up</div>
                </div>

                :

                <div className={classes.submitContainer}>
                    <div className={classes.submitNoActive} onClick={() => setAction("Sign In")}>Sign In</div>

                    <input onClick={all_not_null && group_is_correct && passwords_at_same ? signUpUser : null}
                        className={classes.submitActive} 
                        type="submit"
                        value="Sign Up" />
                </div>

            }

        </form>
    )
}