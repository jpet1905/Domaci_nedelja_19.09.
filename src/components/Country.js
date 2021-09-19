import { divWrapper, divForNav } from "../constants.js"

//pomocna funkcija za prikaz jedne drzave
const NewDisplay = (country) => {

    const arrLang = country.languages.map(el => el.name); //jer su jezici niz objekata

    divWrapper.innerHTML = '';
    divWrapper.className = 'expand';
    divWrapper.innerHTML = `
    <img src = "${country.flag}" alt = "Flag of ${country.name}"/>
    <p><b>${country.name}</b></p>
    <p>capital: <em>${country.capital}</em></p>
    <p>languages: ${arrLang.join(" / ")}</p>
    <p>timezones: ${country.timezones.join("/ ")}</p>
    <p>population: ${country.population}</p>
    `;
}

//pomocna funkcija za dugmice
const addNav = (index, niz) => {
    const divNav = document.createElement('div');
    const btnPrevious = document.createElement('button');
    btnPrevious.textContent = 'One before';
    btnPrevious.addEventListener('click', () => {
        let prevIndex;
        if (index == 0) { //prvi u nizu nema svog prethodnog
            prevIndex = niz.length - 1; //prikazi zadnji u nizu
        } else {
            prevIndex = index - 1;
        }
        let previous = niz[prevIndex]
        NewDisplay(previous);
        addNav(prevIndex, niz);
    })
    const btnNext = document.createElement('button');
    btnNext.textContent = 'One after';
    btnNext.addEventListener('click', () => {
        let nextInd;
        if (index == (niz.length - 1)) { //ako smo na zadnjem u nizu, da krene od pocetka
            nextInd = 0;
        } else {
            nextInd = index + 1;
        }
        let next = niz[nextInd];
        NewDisplay(next);
        addNav(nextInd, niz);
    })

    const btnPreview = document.createElement('button');
    btnPreview.textContent = 'Back to list';
    btnPreview.addEventListener('click', () => {  // radi
        //zapravo sve isto sto pisemo i u index.js
        divWrapper.classList.remove('expand');
        divWrapper.innerHTML = "";
        divForNav.innerHTML = '';
        divWrapper.append(...niz.map((country, index, niz) => DisplayCountry(country, index, niz)));
    })

    divNav.append(btnPrevious, btnNext, btnPreview)
    divForNav.innerHTML = '';
    divForNav.appendChild(divNav);
}

//glavna funkcija koja poziva prethodne dve
const DisplayCountry = (country, index, niz) => {
    const divContainer = document.createElement('div');
    divContainer.className = 'country';
    divContainer.innerHTML = `
    <div>
    <img src = "${country.flag}" alt = "Flag of ${country.name}"/>
    </div>
    <p><b>${country.name}</b></p>
    <p><em>${country.capital}</em></p>
    `

    divContainer.addEventListener('click', () => {
        // //proba
        // console.log(niz);  //radi
        // console.log(index);  //radi
        // console.log(niz[index + 1]);  //radi, ispise tacno sledecu zemlju

        NewDisplay(country); //pozivam pojedinacan prikaz

        //dugmici
        addNav(index, niz);
    })
    return divContainer
}

export default DisplayCountry