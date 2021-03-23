import makeRequest from './authHelpers.js'
import Auth from './auth.js'


const auth = new Auth();

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

    
    
    document.getElementById("submitButton").addEventListener('click',(event) => {
        event.preventDefault();
        
        
            auth.login(auth.getPosts());
    }, false)

    document.getElementById("addPostButton").addEventListener('click',(event) => {
        event.preventDefault();
        event.stopPropagation(); 
        
        
            auth.addPost();
            
    }, false)
    
        
