const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );


const dblclickParagraph =  document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(event){
event.target.classList.toggle('highlight');
}

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);


//addEventListener('keydown',highlight);

addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));



addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));


addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));

const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);
function remove(event) {
console.log('Enjoy this while it lasts!');
onceParagraph.style.backgroundColor = 'pink';
onceParagraph.removeEventListener('click',remove);
}



const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click',(event) => {
event.preventDefault();
console.log('Broken Link!');
});




ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

// capturing
ulElement.addEventListener('click', (event) => console.log('Clicked on ul'), true);
liElement.addEventListener('click', (event) => console.log('Clicked on li'), true );

// bubbling
ulElement.addEventListener('click', (event) => console.log('Clicked on ul'), false);
liElement.addEventListener('click', (event) => console.log('Clicked on li'), false );


ulElement.addEventListener('click',highlight);

