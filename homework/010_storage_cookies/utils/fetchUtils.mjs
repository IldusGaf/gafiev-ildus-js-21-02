// Модуль с утилитами для fetch
const createFetch = (url, formData) => {
        fetch(url, {
                method: 'POST',
                body: formData
            }).then(response => response.json())
                .then((response) => {
                    imgArr.push(response.data.display_url)
                    localStorage.setItem('imgArr', JSON.stringify(imgArr))
                    addImgToGallery(response.data.display_url)
                })
                .catch(console.error)
}

function addImgToGallery(url) {
    const img = document.createElement('img');
    img.src = url
    document.querySelector('.gallery').append(img)
}

const imgArr = localStorage.getItem('imgArr') ? JSON.parse(localStorage.getItem('imgArr')) : []
imgArr.forEach(addImgToGallery)

export {createFetch}
