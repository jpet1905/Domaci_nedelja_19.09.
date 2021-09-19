import DisplayCountries from "./components/Countries.js";
import { getCountries } from "./service.js";
import { btnPick, divWrapper, divForNav } from "./constants.js"

export let countries = [];

btnPick.addEventListener('click', () => {
    getCountries().then(res => {
        divForNav.innerHTML = ''; //da se izbrisu dugmici ako opet uzimamo nove random drzave
        divWrapper.classList.remove('expand'); //maknem sto sam ga sirila kad prikazuje jednu zemlju
        // console.log(res);
        countries = res.data;
        divWrapper.innerHTML = "";
        divWrapper.append(...DisplayCountries(countries));
    })
})

