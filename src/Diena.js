import Stunda from './Stunda.js';

function Diena(props) {
    const stundasJSX = props.stundas.map((stunda) => {
        return <Stunda nosaukums={stunda}/>
    })
    return (
    <>
    <h1>{props.diena}</h1>
    <ul>
        {stundasJSX}
    </ul>
    </>
    )
}

export default Diena;