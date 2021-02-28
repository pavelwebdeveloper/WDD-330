const peopleUrl = "https://swapi.dev/api/people"
const output = document.getElementById('output');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const jump = document.getElementById('go');
const page = document.getElementById('page');
const pageCount = document.querySelector('p strong');

let peopleArray;
let nextPage;
let prevPage;

getPage(peopleUrl);

function getPage(url) {  
  if (url) {
    fetch(url)
    .then(response => response.json())    
    .then(data => {
      pageCount.textContent = Math.ceil(data.count / 10);
      nextPage = data.next;
      prevPage = data.previous;
      removeAllChildNodes(output);
      data.results.forEach(element => {
        output.appendChild(getListItem(element));
      });
    })
    .catch(function (error) {
      console.log(error);
    });; 
  }
}

function getListItem(person) {
  let info = `<p id='${person.name}-details' class='hidden'>`;
  for (p in person) {
    if(p !== "name") {
      info += `${p}: ${person[p]}<br>`;
    } 
  }
  info += '</p>';
  let item = document.createElement("li");
  item.setAttribute('id', person.name)
  item.innerHTML = `${person.name}${info}`;  
  item.addEventListener('click', (event) => {
    event.preventDefault();
    let details = document.getElementById(`${event.target.id}-details`);
    details.classList.toggle('hidden');
  })
  return item;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

next.addEventListener('click', () => getPage(nextPage));
prev.addEventListener('click', () => getPage(prevPage));
jump.addEventListener('click', () => {
 if(page.value > 0 && page.value <= parseInt(pageCount.textContent)) {
    getPage(`${peopleUrl}/?page=${page.value}`);
 }
});