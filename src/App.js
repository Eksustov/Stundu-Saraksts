import Diena from './Diena.js';
function App(){
    const visasStundas = [
        {diena: "Pirmdiena",
        stundas: [
            'Sports',
            'Dabaszinibas',
            'Socialas zinibas',
            'Krievu valoda'
        ]},
        {diena: "Otrdiena",
        stundas: [
            'Govs Tirisana',
            "Skatit putnus",
            "Kaki papajat"
        ]},
        {diena: "Tresdiena",
            stundas: [
                'Govs Tirisana',
                "Skatit putnus",
                "Kaki papajat",
            ]
        },
        {diena: "Ceturdiena",
            stundas: [
                'Govs Tirisana',
                "Skatit putnus",
                "Kaki papajat",
            ]},
        {diena: "Piektdiena",
            stundas: [
                'Govs Tirisana',
                "Skatit putnus",
                "Kaki papajat",
            ]}
    ]
    const dienasJSX = visasStundas.map((diena,indekss) => {
        return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas}/>
    })
    return (
    <>
    <div>Stundu Saraksts jau šodien</div>
    {dienasJSX};
    </>)
} 
//<Diena diena="Pirmdiena" stundas={pirmdienasStundas}/>
export default App;