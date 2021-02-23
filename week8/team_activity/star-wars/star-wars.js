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
            .then( data => outputDiv.innerText = JSON.stringify(data) )
            .catch( error => console.log('There was an error:', error))    
}

window.addEventListener('load', getData(page), false);

previousChunk.addEventListener('click', previousDataSet, false);

//previousChunk.addEventListener('click', () => {console.log("clicked--")}, false);

nextChunk.addEventListener('click', nextDataSet, false);
//nextChunk.addEventListener('click', () => {console.log("clicked++")}, false);

/*previousChunk.addEventListener('click', () => {
}*/

