import Header from "../../Header/Header";
import DictTable from "./DictTable";
import Footer from "../../Footer/Footer"; 
import classes from "./DictPage.module.css"; 
import findIcon from "../../Pictures/loupeIcon.png"; 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react"; 
import axios from "axios"; 

export default function DictPage(props) {
    const [open, setOpen] = useState(false); 

    const [word, setWord] = useState(""); 

    const handleClickOpen = () => {
        setOpen(true); 
    }; 

    function handleClickClose(event){
        setOpen(false); 
        axios({
            method: "POST",
            url: "/dict/add", 
            data: {
                word: word,
            }
        })
        .then((response) => {
            console.log(word); 
        }).catch((error) => {
            if (error.response) {
                console.log(error.response); 
                console.log(error.response.status); 
                console.log(error.response.headers); 
            }
        })
        setWord(""); 
    }; 

    return(
        <>
            <Header />

            <div className={classes.mainContainer}>
                <div className={classes.title}>Dictionary</div>

                <div className={classes.settingsButtonContainer}>
                    <a role="button" className={classes.settingsButton} onClick={handleClickOpen}>
                        <img src={findIcon} alt="" style={{width: "100%", height: "100%"}}></img>
                    </a> 
                </div>

                <Dialog
                    open={open}
                    onClose={handleClickClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: (event) => {
                            event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClickClose();
                    },
                }}>

                <DialogTitle>Adding new word</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add new word in dictionary you need write it
                    </DialogContentText>

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="word"
                        name="word"
                        label="Add word"
                        type="text"
                        fullWidth
                        value={word}
                        text={word}
                        onChange={(e) => setWord(e.target.value)}
                        variant="standard" />

                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleClickClose}>Cancel</Button>
                        <Button type="submit">Add</Button>
                    </DialogActions>

                </Dialog>

                <DictTable />
            </div>

            <Footer />
        </>
    )
}