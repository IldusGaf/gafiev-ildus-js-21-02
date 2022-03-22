const urlSWAPI = 'https://swapi.dev/api/people/'
const swApi = {
    getMain(callback,url = urlSWAPI) {
        fetch(url)
            .then (response => response.json())
            .then (callback)

    }
}

const tbody = document.querySelector('tbody');
const prevBtn = document.querySelector('.nav_prev');
const nextBtn = document.querySelector('.nav_next');
const sortBtn = document.querySelector('.nav_sort');

const links = {
    previous: '',
    next:''
};
let sortToggle = false;

const printResult = (obj) => {
    const results = sortToggle ? obj.results.sort((a,b)=>a.height-b.height): obj.results;
    results.forEach(key => {
        const tr = document.createElement('tr')
        tr.innerHTML = `<td>${key.name}</td> 
                        <td>${key.height}</td>
                        <td>${key.mass}</td>
                        <td>${key.gender}</td>`
        tbody.append(tr)
    })
    links.previous = obj.previous ? obj.previous : urlSWAPI;
    links.next = obj.next;
}

const toLink = (link) => {
    tbody.innerHTML='';
    swApi.getMain(printResult,link)
};

nextBtn.addEventListener('click',()=>toLink(links.next))
prevBtn.addEventListener('click',()=>toLink(links.previous))
sortBtn.addEventListener('click', ()=> {sortToggle=!sortToggle
    toLink();
})

swApi.getMain(printResult);
