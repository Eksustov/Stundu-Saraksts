import Stunda from './Stunda.js';

function Diena(props) {
    return (
    <>
    <h1>{props.diena}</h1>
    <ul>
        <Stunda nosaukums={props.stundas[0]}/>
        <Stunda nosaukums={props.stundas[1]}/>
        <Stunda nosaukums={props.stundas[2]}/>
        <Stunda nosaukums={props.stundas[3]}/>
    </ul>
    </>
    )
}

export default Diena;