

const searchByFirstLetter = document.getElementById('searchByFirstLetter');
const letterForSearchError = document.querySelector('#searchByFirstLetter + span.error');
const searchByName = document.getElementById('searchByName');
const searchByNameError = document.querySelector('#searchByName + span.error');

searchByFirstLetter.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.
  console.log("Inside error");
  console.log(event.target.value);
  console.log("letterForSearchError");
  console.log(letterForSearchError);
  console.log("match result");
  console.log(event.target.value.match(/[a-z]/g));
  
  

  if (event.target.value.match(/[a-z]/g) != null || event.target.value == '') {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    letterForSearchError.textContent = ''; // Reset the content of the message
    letterForSearchError.className = 'error'; // Reset the visual state of the message
  } else {
      console.log("ON THE WAY TO ERROR !!!!!!!!!!!!!!!!!!!!!!!!");
    // If there is still an error, show the correct error
    showsearchByFirstLetterError();
  }
});

searchByName.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.
    console.log("Inside error");
    console.log(event.target.value);
    console.log("letterForSearchError");
    console.log(letterForSearchError);
    console.log("match result");
    console.log(event.target.value.match(/[a-z]/g));
    
    
  
    if (event.target.value.match(/[a-z]/g) != null || event.target.value == '') {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      searchByNameError.textContent = ''; // Reset the content of the message
      searchByNameError.className = 'error'; // Reset the visual state of the message
    } else {
        console.log("ON THE WAY TO ERROR !!!!!!!!!!!!!!!!!!!!!!!!");
      // If there is still an error, show the correct error
      showSearchByNameError();
    }
  });

/*form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit

  if(!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});*/

function showsearchByFirstLetterError() {
  
    letterForSearchError.textContent = 'Entered value needs to be a letter.';
  

  // Set the styling appropriately
  letterForSearchError.className = 'error active';
}

function showSearchByNameError() {
  
    searchByNameError.textContent = 'Entered value needs to consist of letters.';
  

  // Set the styling appropriately
  searchByNameError.className = 'error active';
}