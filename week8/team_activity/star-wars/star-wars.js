var page = 1;
const apiURL = 'http://swapi.dev/api/people/?page=';
const previousChunk = document.getElementById('prev');
const nextChunk = document.getElementById('next');
const outputDiv = document.getElementById('output');




//const textURL = 'https://swapi.dev/api/people/';



/*window.addEventListener('load', () => {
//apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then( response => {
    outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
    return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerText = JSON.stringify(data) )
    .catch( error => console.log('There was an error:', error))
},false);*/
function nextDataSet(){
    page++;
    if (page == 9){
        page = 8;
    }
    getData(page);
}

function previousDataSet(){
    page--;
    if(page == 0){
        page = 1;
    }
    getData(page);
}

function representData(data){
    console.log("HI HI ");
    let persons = '';
    for(let i=0;i<data.length;i++){
        persons += `<h2>${data[i].name}</h2>
        <ul>
            <li><b>height</b> ${data[i].height}</li>
            <li><b>mass</b> ${data[i].mass}</li>
            <li><b>hair color</b> ${data[i].hair_color}</li>
            <li><b>skin color</b> ${data[i].skin_color}</li>
            <li><b>eye color</b> ${data[i].eye_color}</li>
            <li><b>birth year</b> ${data[i].birth_year}</li>
            <li><b>gender</b> ${data[i].gender}</li>
            <li><b>homeworld</b> <span id="${data[i].name}-planet">`+getPlanet(data[i].homeworld, data[i].name)+`</span></li>
            <li><b>films</b> <ul id="${data[i].name}-films">`+renderFilms(data[i].films, data[i].name)+`</ul></li>
        </ul>`; 
    }

    return persons;
}

function getData(page){    
        //apiButton.addEventListener('click', () => {
            console.log(page);
            fetch(apiURL+page)
            .then( response => {
            outputDiv.innerHTML = 'Waiting for response...';
            if(response.ok) {
            return response;
            }
            throw Error(response.statusText);
            })
            .then( response => response.json() )
            //.then( data => outputDiv.innerText = JSON.stringify(data) )
            //.then( data => outputDiv.innerText = data.results[0].name)
            .then( data => outputDiv.innerHTML = representData(data.results))
            .catch( error => console.log('There was an error:', error))    
}

function getPlanet(planet, name){    
    //apiButton.addEventListener('click', () => {
        
        fetch(planet)
        .then( response => {
        //outputDiv.innerHTML = 'Waiting for response...';
        if(response.ok) {
            console.log(planet);
            console.log(name);
        return response;
        }
        throw Error(response.statusText);
        })
        .then( response => response.json() )
        //.then( data => outputDiv.innerText = JSON.stringify(data) )
        .then( data => document.getElementById(name+"-planet").innerHTML = data.name)
        //.then( data => document.getElementById(name).innerHTML = JSON.stringify(data))
        //.then( data => outputDiv.innerHTML = representData(data.results))
        .catch( error => console.log('There was an error:', error))    
}

function renderFilms(films, name){
    let filmsList = '';
    let id = 0;
    films.forEach(element => {
        id++;
        let identifier = name + id;
        name += id;
        filmsList += `<li id="${name}">`+getFilm(element, identifier)+`</li>`;
        
    });
    return filmsList;
}

function getFilm(film, identifier){    
    //apiButton.addEventListener('click', () => {
       
        fetch(film)
        .then( response => {
        //outputDiv.innerHTML = 'Waiting for response...';
        if(response.ok) {
            console.log("*****************************");
            console.log(film);
        return response;
        }
        throw Error(response.statusText);
        })
        .then( response => response.json() )
        //.then( data => document.getElementById(name+"-films").innerText = JSON.stringify(data) )
        //.then( data => document.getElementById(name+"-films").innerHTML = data.title)
        .then( data => document.getElementById(identifier).innerText = data.title)
        //.then( data => JSON.stringify(data))
        //.then( data => outputDiv.innerHTML = representData(data.results))
        .catch( error => console.log('There was an error:', error))    
}


window.addEventListener('load', getData(page), false);

//document.getElementById(name).addEventListener('load', getData(page), false);

previousChunk.addEventListener('click', previousDataSet, false);

//previousChunk.addEventListener('click', () => {console.log("clicked--")}, false);

nextChunk.addEventListener('click', nextDataSet, false);
//nextChunk.addEventListener('click', () => {console.log("clicked++")}, false);

/*previousChunk.addEventListener('click', () => {
}*/

