export let objLinks: UrlsInterface = {
    previous: null,
    current: 'https://swapi.dev/api/people/',
    next: 'https://swapi.dev/api/people/?page=2',
}
interface UrlsInterface {
    previous: string,
    current: string,
    next: string,
}
