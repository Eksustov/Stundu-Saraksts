import Stunda from './Stunda.js';
import styles from "./Diena.module.css";

function Diena(props) {
    const stundasJSX = props.stundas.map((stunda,indekss) => {
        return <Stunda key={indekss} classes={stunda}/>
    })
    return (
    <>
    <div className={styles.cube}>
    <h1 className={styles.violets}>{props.diena}</h1>
    </div>
    <ul>
        {stundasJSX}
    </ul>
    </>
    )
}

export default Diena;