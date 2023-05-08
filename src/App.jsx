
import { useEffect, useState } from "react"

var FACT_RANDOM = 'https://catfact.ninja/fact';
// var IMAGEN = `https://cataas.com/cat/says/:${firstWord}?size=:size&color=:color`;



export function App() {

    const [fact, setFact] = useState("")
    const [imagenCat, setImagenCat] = useState("")


    useEffect (()  => {
        fetch(FACT_RANDOM)
        .then(res => res.json())
        .then(data => {
            const {fact} = data
            setFact(fact)})
    }, [])


    
var firstWord = fact.split(' ', 1).join(' ') 
    useEffect (()  => {

        
        

        fetch(`https://cataas.com/cat/says/${firstWord}?size=:50&color=:red&json=true`)
        .then(res => res.json())
        .then(data => {
            const {url} = data
            setImagenCat(`https://cataas.com${url}`)})
    }, [fact])


    const handleClick = (e) => {
        e.preventDefault();
        window.location.reload(fact);

    }


    return(
        <main style={{ display: 'flex', justifyContent: "center", flexDirection:'column'}}>
            {fact &&
                <p>{fact}</p>}
            {firstWord &&  <p>First Word: {firstWord}</p>}
            {imagenCat && 
            <img style={{maxWidth: '250px', height:'auto'}} src={imagenCat} alt="some cat photo"/> }

            <button onClick={handleClick}>Press</button>
        </main>
    )
}


// => 