
const nameInput = document.querySelector('.nameInputClass');;
const telInput = document.querySelector('.telInputClass');
// Валидируемые input-ы
const validateName = (name) => /^[А-я]*$/.test(name);
const validateTel = (tel) => /^\d*$/.test(tel);
let nameInputValue = "";
let telInputValue = "";

const handleInput = (e) => {
    if(validateName(e.target.value)) {
        nameInputValue = e.target.value;
    }
    if(validateTel(e.target.value)) {
        telInputValue = e.target.value;
    }
}

nameInput.addEventListener('input', handleInput);
nameInput.addEventListener('input', () => nameInput.value = nameInputValue);
telInput.addEventListener('input', handleInput);
telInput.addEventListener('input', () => telInput.value = telInputValue);

// Добавление новый строк
const table = document.querySelector('table');
const tBody = table.lastElementChild;
const button = document.querySelector('.buttonClass');
button.addEventListener('click', addRow);

function addRow() {
    if (nameInput.value && telInput.value) {
        const newRow = document.createElement('tr');

        const newName = document.createElement('td');
        newName.innerHTML = nameInput.value;
        newRow.append(newName);

        const newTel = document.createElement('td');
        newTel.innerHTML = telInput.value;
        newRow.append(newTel);
        // Кнопка удаления записи
        const delButton = document.createElement('button');
        delButton.innerHTML = 'Удалить';
        delButton.classList.add('buttonDelete');
        delButton.addEventListener('click', delRow);

        newRow.append(delButton);

        tBody.append(newRow);
    } else {
            alert('Необходимо заполнить поля!');
        }
}
function delRow() {
    this.parentElement.remove();
}
// Добавляем кнопки меняющие цвета
const firstStyleButton = document.querySelectorAll('.buttonStyleClass')[0];
const secondStyleButton = document.querySelectorAll('.buttonStyleClass')[1];
const thirdStyleButton = document.querySelectorAll('.buttonStyleClass')[2];


const handleStyle = (e) => {
    if(e.target == firstStyleButton) {
        table.classList.toggle('firstStyle');
        table.classList.remove('secondStyle');
        table.classList.remove('thirdStyle');
    } else if(e.target == secondStyleButton)  {
        table.classList.toggle('secondStyle');
        table.classList.remove('firstStyle');
        table.classList.remove('thirdStyle');
    } else {
        table.classList.toggle('thirdStyle');
        table.classList.remove('firstStyle');
        table.classList.remove('secondStyle');
    }
}

firstStyleButton.addEventListener('click', handleStyle);
secondStyleButton.addEventListener('click', handleStyle);
thirdStyleButton.addEventListener('click', handleStyle);
