const previousChunk = document.getElementById('prev');
const nextChunk = document.getElementById('next');
const outputDiv = document.getElementById('output');

//const textURL = 'https://swapi.dev/api/people/';
const apiURL = 'https://swapi.dev/api/people';

window.addEventListener('load', () => {
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
},false);

previousChunk.addEventListener('click', () => {
}

