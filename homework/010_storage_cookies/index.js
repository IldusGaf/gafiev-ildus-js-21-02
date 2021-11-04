import {ibbapi} from './api/ibbapi.js' // Импорт из другого модуля

const input = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton')
uploadButton.addEventListener('click', () => {
    ibbapi.uploadBase64UrlToImgBB(input.files[0]);
})