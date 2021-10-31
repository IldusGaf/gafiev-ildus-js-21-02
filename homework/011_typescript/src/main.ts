// import {printHello} from "./module";
// printHello(prompt())

import {swapi} from './api/swapi' // Импорт из другого модуля
//import {objLinks} from './constants/swparams.ts'
import {printPeople} from './components/swapiComponents'

const table: any  = document.getElementById('table') ;
const [previousButton, nextButton]: any  = document.querySelectorAll('button') ;
swapi.getMain((obj: any) => table.append(printPeople(obj)), console.error);

previousButton.addEventListener('click', handlePreviousButton);
nextButton.addEventListener('click', handleNextButton);

function handleNextButton() {
    table.lastChild.innerHTML = '';
    swapi.getMainNext((obj: any) => table.append(printPeople(obj)), console.error);
}

function handlePreviousButton() {
    table.lastChild.innerHTML = '';
    swapi.getMain((obj: any) => table.append(printPeople(obj)), console.error);
}
