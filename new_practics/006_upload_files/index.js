const form = document.getElementById('file_form');


const fileToBase64Url = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => callback(reader.result.replace(/^.*,/, ''))
}

const formEventHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    fileToBase64Url(formData.get('image'), (res) => formData.set('image',res));
}

form.addEventListener('submit', formEventHandler)

