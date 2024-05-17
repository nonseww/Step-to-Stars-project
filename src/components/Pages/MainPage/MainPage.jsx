import classes from './MainPage.module.css'
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer.jsx';
import StarboxContainer from './StarboxContainer';
import MainHeader from './MainHeader';
import  { situationText, tasksText, actionText, resultText} from "./textsData.js";

export default function MainPage() {
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
                        <StarboxContainer letter="S" backgroundColorAll="#Ffedea" ContainerBorderColor="red" backgroundColorLetter="#fab88c" 
                            titleText="Situation" titleColor="red" text={situationText}>
                        </StarboxContainer>

                        <StarboxContainer letter="T" backgroundColorAll="#feecf5" ContainerBorderColor="orange" backgroundColorLetter="#fbed9a" 
                            titleText="Tasks" titleColor="orange" text={tasksText}>
                        </StarboxContainer>

                        <StarboxContainer letter="A" backgroundColorAll="#cae0fa" ContainerBorderColor="blue" backgroundColorLetter="#a5e8fb" 
                            titleText="Action" titleColor="blue" text={actionText}>
                        </StarboxContainer>

                        <StarboxContainer letter="R" backgroundColorAll="#CCCCFF" ContainerBorderColor="purple" backgroundColorLetter="#c6d2ff" 
                           titleText="Result" titleColor="purple" text={resultText}>
                        </StarboxContainer>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}