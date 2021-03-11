export function getJSON(url){
    console.log("url inside getJSON");
    console.log(url);
return fetch(url)
.then( function(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    } else {
        return response.json();
    }
} ) // transforms the JSON data into a JavaScript object or throws an error
//.then( data => console.log(Object.entries(data)) )
.catch( function(error) {
    console.log('There was an error:', error);
})
}


// method to return the current location of the user
export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};
