import Header from "../../Header/Header";
import DictTable from "./DictTable";
import Footer from "../../Footer/Footer"; 
import classes from "./DictPage.module.css"; 

export default function DictPage() {
    return(
        <>
            <Header />

            <div className={classes.mainContainer}>
                <div className={classes.title}>Dictionary</div>
                <DictTable />
            </div>

            <Footer />
        </>
    )
}