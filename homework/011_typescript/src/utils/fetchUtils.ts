// Модуль с утилитами для fetch
const createFetch = (url: string) => (callback: any, errorCallback: any) => {
    fetch(url)
        .then(response => response.json())
        .then(callback)
        .catch(errorCallback)
}

export {createFetch}
