export function getData(url){
    
return fetch(url)
.then( function(response) {
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
}

/*async function getMovieDetails(url){
    console.log("url inside getMovieDetails");
    console.log(url);
return fetch(url)
.then( function(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    } else {
        
        return response.json();
    }
} )

.then(
    data => document.getElementById(data.imdbID).innerHTML = `<ul><li><bold>Plot: </bold>${data.Plot}</li></ul>`
    //data => console.log(data)
)
//.then(data => console.log(data)) // transforms the JSON data into a JavaScript object or throws an error
//.then( data => console.log(Object.entries(data)) )
.catch( function(error) {
    console.log('There was an error:', error);
})
}

const outputDiv = document.getElementById('output');
var movies = '';

//getJSON('http://www.omdbapi.com/?i=tt3896198&apikey=6c3a52ae');
//getJSON('http://www.omdbapi.com/?apikey=6c3a52ae&s=Alice in Wonderland');
getMovies('http://www.omdbapi.com/?apikey=6c3a52ae&s=Alice in Wonderland');
async function showMovies(data){
    console.log("INSIDE SHOW MOVIES FUNCTION ");
    console.log(data.Search);
    data.Search.forEach(movie => {
        let urlToGetMovieDetails = 'http://www.omdbapi.com/?i='+movie.imdbID+'&apikey=6c3a52ae'
        const movieDetailsData = getMovieDetails(urlToGetMovieDetails);
        console.log("movieDetailData: ");
    console.log(movieDetailsData);
        let movieDetails = showMovieDetails(movieDetailsData);
        
        console.log("show what is returned by getMovieDetails function");
    console.log(movieDetails);
    let li = document.createElement("li");
    li.innerHTML = `<h2>${movie.Title}</h2>        
            <b>Image</b><img src="${movie.Poster}"></img>
            <div id="${movie.imdbID}"></div>`; 
            
            outputDiv.appendChild(li); 
            //console.log(movie.Poster);
            //console.log(movie.imdbID);   
            //getImage(movie.Poster, movie.imdbID)
});
}


function showMovieDetails(data){
    console.log("INSIDE showMovieDetails FUNCTION ");
    console.log(data);
    let ul = document.createElement("ul"); 
    for (movieDetails in data) {
        console.log("INSIDE for loop inside showMovieDetails FUNCTION ");
    console.log(data[movieDetails]);
        
    let li = document.createElement("li");
    li.innerHTML = `<h2>${data[movieDetails]}</h2>        
            <b>Image</b><img src="${data[movieDetails]}"></img>`; 
            
            ul.appendChild(li); 
            console.log("ul element");
    console.log(ul);
            //console.log(movie.Poster);
            //console.log(movie.imdbID);   
            //getImage(movie.Poster, movie.imdbID)
}
return ul;
}

/*async function getImage(url, number){
    return fetch(url)
.then( function(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    } else {
        console.log("IMG IMG IMG IMG");
        console.log(response.json());
        return response.json();
    }
} )
.then(
    data => {
        console.log("DATA DATA DATA");
        console.log(data);
        document.getElementById("image"+number).innerHTML = data;
    }
)
//.then(data => console.log(data)) // transforms the JSON data into a JavaScript object or throws an error
//.then( data => console.log(Object.entries(data)) )
.catch( function(error) {
    console.log('There was an error:', error);
})
}*/


// method to return the current location of the user
/*export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};*/

/*fetch("https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "5d149ad13dmsh78a0306d2ea3899p163053jsnc81f8bbb92fd",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
})
.then(
    data => console.log(data.forEach(element => {
        console.log(element.slice(7));
        getMovieInfo(element.slice(7));
    })
    )
    
)
.catch(err => {
	console.error(err);
});*/
