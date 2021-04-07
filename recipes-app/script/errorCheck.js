

const searchByFirstLetter = document.getElementById('searchByFirstLetter');
const letterForSearchError = document.querySelector('#searchByFirstLetter + span.error');
const searchByName = document.getElementById('searchByName');
const searchByNameError = document.querySelector('#searchByName + span.error');

searchByFirstLetter.addEventListener('input', function (event) {  

  if (event.target.value.match(/[a-z]/g) != null || event.target.value == '') {    
    letterForSearchError.textContent = '';
    letterForSearchError.className = 'error';
  } else {
    // If there is still an error, show the error
    showsearchByFirstLetterError();
  }
});

searchByName.addEventListener('input', function (event) { 
  
    if (event.target.value.match(/[a-z]/g) != null || event.target.value == '') {
      
      searchByNameError.textContent = ''; 
      searchByNameError.className = 'error'; 
    } else {
      // If there is still an error, show the error
      showSearchByNameError();
    }
  });

function showsearchByFirstLetterError() {  
    letterForSearchError.textContent = 'Entered value needs to be a letter';

  // Set the styling appropriately
  letterForSearchError.className = 'error active';
}

function showSearchByNameError() {  
    searchByNameError.textContent = 'Entered value needs to consist of letters';
  // Set the styling appropriately
  searchByNameError.className = 'error active';
}