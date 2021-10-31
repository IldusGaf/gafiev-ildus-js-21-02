import {swapi} from './api/swapi.js' // Импорт из другого модуля
//import {objLinks} from './constants/swparams.ts'
import {printPeople} from './components/swapiComponents.js'

const table = document.getElementById('table');
const [previousButton, nextButton] = document.querySelectorAll('button');
swapi.getMain((obj) => table.append(printPeople(obj)), console.error);

previousButton.addEventListener('click', handlePreviousButton);
nextButton.addEventListener('click', handleNextButton);

function handleNextButton() {
    table.lastChild.innerHTML = '';
    swapi.getMainNext((obj) => table.append(printPeople(obj)), console.error);
}

function handlePreviousButton() {
    table.lastChild.innerHTML = '';
    swapi.getMain((obj) => table.append(printPeople(obj)), console.error);
}
