import styles from "./Stunda.module.css";

function Stunda(props){
    return(
        
        <li className={styles.violets}>{props.classes}</li>
        
    );
}
export default Stunda;