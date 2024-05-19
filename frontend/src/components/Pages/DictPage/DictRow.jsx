import "./DictPage.module.css"; 

const DictRow = ({ item }) => {
    return(
        <tr>
            <td key={0}>{item.word}</td>
            <td key={1}>{item.partOfSpeech}</td>
            <td key={2}>{item.definition}</td>
            <td key={3}>{item.synonyms}</td>
            <td key={4}>{item.example}</td>
        </tr>
    )
}

export default DictRow; 