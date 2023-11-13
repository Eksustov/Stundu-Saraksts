import { useEffect, useState } from "react";
import Diena from './Diena.js';
function App(){
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(true)

    async function getLessons(){
        const response = await fetch(
            "https://cheese-cake.onthewifi.com/api/lessons"
        )
        const data = await response.json();
        const cleansedData = [
            {
                diena: "Pirmdiena",
                stundas: data.IPb22[0].classes,
            },
            {
                diena: "Otrdiena",
                stundas: data.IPb22[1].classes,
            },
            {
                diena: "Tresdiena",
                stundas: data.IPb22[2].classes,
            },
            {
                diena: "Ceturdiena",
                stundas: data.IPb22[3].classes,
            },
            {
                diena: "Piektdiena",
                stundas: data.IPb22[4].classes,
            },
        ]
        setLessons(cleansedData)
        setLoading(false)
    }

    useEffect(() => {
        getLessons();
    }, [])

    console.log(lessons);

    const dienasJSX = lessons.map((diena,indekss) => {
       return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas}/>
    })
    return (
    <>
    
    <div>Stundu Saraksts jau šodien</div>
    {loading ? <p>Loading...</p> : dienasJSX}

    </>)
} 
export default App;