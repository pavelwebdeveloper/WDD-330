const input = document.forms['search'].elements.searchInput;
input.value = 'Search Here';
console.log(document.forms['search'].elements);
//input.addEventListener('focus', () => alert('focused'), false);
//input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
    input.value = ''
    }
    }, false);
input.addEventListener('blur', function(){
    if(input.value === '') {
    input.value = 'Search Here';
    } }, false);
    
input.addEventListener('change', () => alert('changed'), false);

const form = document.forms['search'];
form.addEventListener ('submit', search, false);
function search() {
alert(`You Searched for: ${input.value}`);
event.preventDefault();
}
