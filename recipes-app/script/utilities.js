export function getData(url){

  return fetch(url)
    .then( function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {  
            //console.log("RESPONSE!!!!!!!!!!!!!!!!!!!"); 
            //console.log(response.json()); 
            return response.json();
            
        }
    } )
    //.then(data => console.log(data)) // transforms the JSON data into a JavaScript object or throws an error
    //.then( data => console.log(Object.entries(data)) )
    .catch( function(error) {
        console.log('There was an error:', error);
    })
    }

        
    /*export function getData(url) {
        console.log("ASSIGNED TOKEN INSIDE makeRequest");
        console.log(url);
      // we will need to set some custom options for our fetch call
        let options = {
        mode: 'no-cors'
      };
     
      // if a token was passed in we should send it on.
     
    
      /*console.log("%%%%%%%%%%%%%%%%%%%%%%");
      console.log(body);
      console.log(baseURL + url);
      console.log(options);
      console.log(token);
      console.log(options.headers.Authorization);*/
      
      /*return fetch(url, options)
      // in this case we are processing the response as JSON before we check the status. The API we are using will send back more meaningful error messages than the default messages in the response, but we have to convert it before we can get to them.
      
      .then( function(response) {
    
      if (!response.ok) {
        // server will send a 500 server error if the token expires...or a 401 if we are not authorized, ie bad username/password combination, and a 404 if the URL we requested does not exist. All of these would cause response.ok to be false
        
        console.log(response);
        throw new Error(`${response.status}: ${response.message}`);
      } else return response;
      })
      // not catching the error here...so we will need to catch it later on and handle it.
    }
    
    
    
    //export default getData;*/

    /*export function getData(url, data = {}) {
        // Default options are marked with *
        return fetch(url, {
          //method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'no-cors' // no-cors, *cors, same-origin
          /*headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },*/
          //redirect: 'follow', // manual, *follow, error
          //referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          
        //})*/
        /*.then( function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {        
                return response.json();
            }
        } )
        //.then(data => console.log(data)) // transforms the JSON data into a JavaScript object or throws an error
        //.then( data => console.log(Object.entries(data)) )
        .catch( function(error) {
            console.log('There was an error:', error);
        })
      }*/
      
     //  getData('https://example.com/answer', { answer: 42 })
        /*.then(data => {
          console.log(data); // JSON data parsed by `data.json()` call
        });*/
    
    