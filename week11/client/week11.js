import makeRequest from './authHelpers.js'
import Auth from './auth.js'

/*makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
    })
    .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
      });*/

    
    

    /*document.getElementById("submitButton").addEventListener("click", submit);

    function submit(){
        const auth = new Auth();
        auth.login();
    }*/

    document.getElementById("login").addEventListener('click',(event) => {
        event.preventDefault();
        
            const auth = new Auth();
            auth.login(auth.getPosts());
    })

    
        
