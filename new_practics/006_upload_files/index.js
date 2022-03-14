const form = document.getElementById('file_form');
const gallery = document.querySelector('.gallery');
const API_KEY = '76ac0f8ae6fc167642df69a28e1893ae';
const imgArr = localStorage.getItem('imgArr') ? JSON.parse(localStorage.getItem('imgArr')) : [];

const fileToBase64Url = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => callback(reader.result.replace(/^.*,/, ''))
}

const formEventHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    fileToBase64Url(formData.get('image'), (res) => formData.set('image',res));
    uploadFileToImgBB(formData);
}

form.addEventListener('submit', formEventHandler)


function uploadFileToImgBB(formData) {
    formData.set('key', API_KEY);
    fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        body: formData
    }).then(resp=>resp.json())
      .then(json=>addToLocalStorage(json.data.display_url))
}

function addToLocalStorage(url) {
    imgArr.push(url);
    localStorage.setItem('imgArr', JSON.stringify(imgArr))
    imgArr.forEach((elem)=>addToGallery(elem))
}

function addToGallery(url) {
    const img = document.createElement('img');
    img.src = url;
    gallery.append(img);
}