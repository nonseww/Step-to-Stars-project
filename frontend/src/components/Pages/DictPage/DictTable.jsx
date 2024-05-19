import DictRow from "./DictRow.jsx";
import classes from "./DictPage.module.css"; 
import titles from "./tableTitles.js"; 
import data from "./apiData.js"; 

const DictTable = () => {
    return(
        <table className={classes.infoTable}>
            <thead className={classes.thead}>
                <tr className={classes.tr}>
                    {titles.map((elem, index) => {
                        return <th key={index}>{elem.charAt(0).toUpperCase() + elem.slice(1)}</th>
                    })}
                </tr>
            </thead>

            <tbody>
                {data.map((title, index) => {
                    return <DictRow item={title} key={index}/>
                })}
            </tbody>

        </table>
    )
}

export default DictTable; 