import Diena from './Diena.js';
function App(){
    const pirmdienasStundas = [
        'Sports',
        'Dabaszinibas',
        'Socialas zinibas',
        'Krievu valoda'
    ];
    const visasStundas = {
        "Pirmdiena": [
            'Sports',
            'Dabaszinibas',
            'Socialas zinibas',
            'Krievu valoda'
    ]
    }
    return (
    <>
    <div>Stundu Saraksts jau šodien</div>
    <Diena diena="Pirmdiena" stundas={pirmdienasStundas}/>
    </>)
} 

export default App;