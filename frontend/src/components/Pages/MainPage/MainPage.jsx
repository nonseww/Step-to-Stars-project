import classes from './MainPage.module.css'
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer.jsx';
import StarboxContainer from './StarboxContainer';
import MainHeader from './MainHeader';
import  { situationText, tasksText, actionText, resultText} from "./textsData.js";

export default function MainPage() {
    fetch('/api')
        .then(response => response.json())
        .then(data => console.log(data))
    return(
        <>
            <Header />
            <div className={classes.mainContainer}>

                <MainHeader/>

                <div className={classes.subInfoContainer}>

                    <div className={classes.subTitleContainer}>
                        <div className={classes.subStarTitle}>
                            So, our choice is STAR.
                        </div>
                    </div>

                    <div className={classes.BoxesContainer}>
                        <StarboxContainer letter="S" backgroundColorAll="#ffedea" ContainerBorderColor="#ef6e5a" backgroundColorLetter="#fdb4a8" 
                            titleText="Situation" titleColor="#ef6e5a" text={situationText}>
                        </StarboxContainer>

                        <StarboxContainer letter="T" backgroundColorAll="#feecf5" ContainerBorderColor="#db6da4" backgroundColorLetter="#fcb7d9" 
                            titleText="Tasks" titleColor="#db6da4" text={tasksText}>
                        </StarboxContainer>

                        <StarboxContainer letter="A" backgroundColorAll="#eaeaff" ContainerBorderColor="#7979ee" backgroundColorLetter="#c4c4fe" 
                            titleText="Action" titleColor="#7979ee" text={actionText}>
                        </StarboxContainer>

                        <StarboxContainer letter="R" backgroundColorAll="#d6e8ff" ContainerBorderColor="#4b95fc" backgroundColorLetter="#bcd7fd" 
                           titleText="Result" titleColor="#4b95fc" text={resultText}>
                        </StarboxContainer>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}