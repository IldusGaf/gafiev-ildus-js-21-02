import {objLinks} from '../constants/swparams.js'
// Функции, возвращающие блоки (DOM=-элементы)
const tbody = document.createElement('tbody');
export function printPeople(obj) {
    obj.results.forEach(result => {
        const row = document.createElement('tr');

        const name = document.createElement('td');
        name.innerHTML = result.name;
        row.append(name);

        const height = document.createElement('td');
        height.innerHTML = result.height;
        row.append(height);

        const mass = document.createElement('td');
        mass.innerHTML = result.mass;
        row.append(mass);

        const gender = document.createElement('td');
        gender.innerHTML = result.gender;
        row.append(gender);

        tbody.append(row);
    })
    objLinks.previous = obj.previous;
    objLinks.next = obj.next;
    return tbody;

}
