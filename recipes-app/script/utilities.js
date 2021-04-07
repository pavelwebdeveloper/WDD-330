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

        
    