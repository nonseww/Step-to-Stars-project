import "./DictPage.module.css"; 

const DictRow = ({ item }) => {
    console.log(item); 
    return(
        <tr>
            {item.map((title, index) => {
                return(
                    <td key={index}>{title}</td>
                )
            })}
        </tr>
    )
}

export default DictRow; 