import DisplayCountry from "./Country.js";


const DisplayCountries = (countries) => {
    let tmp = [];
    
    // random broj je index elementa(zemlje) u nizu a interval je od 0 do 249, koliko ukupno ima zemalja (duzina niza)
    // Math.floor(Math.random()*countries.length)
    // duzina niza je 250, zadnji index je 249 pa ne treba +1 u Math.floor

    for (let i = 1; i <= 15; i++) {
        //za odabir jedne zemlje
        let x = Math.floor(Math.random() * countries.length);
        console.log(x);
        tmp.push(countries[x]);
    }
    console.log(tmp);
   
    return tmp.map((country, index, tmp) => DisplayCountry(country, index, tmp));
   
}

export default DisplayCountries