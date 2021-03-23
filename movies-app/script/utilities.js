/*export*/ function getJSON(url){
    console.log("url inside getJSON");
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
    data => showMovies(data)
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
getJSON('http://www.omdbapi.com/?apikey=6c3a52ae&s=Alice in Wonderland');
function showMovies(data){
    console.log("INSIDE SHOW MOVIES FUNCTION ");
    console.log(data.Search);
    data.Search.forEach(movie => {
    let li = document.createElement("li");
    li.innerHTML = `<h2>${movie.Title}</h2>        
            <b>Image</b><img src="${movie.Poster}"></img>`; 
            outputDiv.appendChild(li); 
            //console.log(movie.Poster);
            //console.log(movie.imdbID);   
            //getImage(movie.Poster, movie.imdbID)
});
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
});



function getMovieInfo(element){
fetch("https://imdb8.p.rapidapi.com/title/get-details?tconst="+element, {
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
    data => console.log(data)
)
.catch(err => {
	console.error(err);
});
}

/*function representData(data){
    console.log("COUNT ");
    console.log(data.count);
    document.getElementById("getNumber").max = parseInt(data.count/10);
    document.getElementById("getNumber").value = page;
    
    let persons = '';
    for(let i=0;i<data.results.length;i++){
        persons += `<h2>${data.results[i].name}</h2>
        <div class="hidden">
        <ul>
            <li><b>height</b> ${data.results[i].height}</li>
            <li><b>mass</b> ${data.results[i].mass}</li>
            <li><b>hair color</b> ${data.results[i].hair_color}</li>
            <li><b>skin color</b> ${data.results[i].skin_color}</li>
            <li><b>eye color</b> ${data.results[i].eye_color}</li>
            <li><b>birth year</b> ${data.results[i].birth_year}</li>
            <li><b>gender</b> ${data.results[i].gender}</li>
            <li><b>homeworld</b> <span id="${data.results[i].name}-planet">`+getInfo(data.results[i].homeworld, data.results[i].name, "planet")+`</span></li>
            <li><b>films</b> <ul id="${data.results[i].name}-films">`+renderItems(data.results[i].films, data.results[i].name, "films")+`</ul></li>
            <li><b>species</b> <span id="${data.results[i].name}-species">`+getInfo(data.results[i].species, data.results[i].name, "species")+`</span></li>
            <li><b>vehicles</b> <ul id="${data.results[i].name}-vehicles">`+renderItems(data.results[i].vehicles, data.results[i].name, "vehicles")+`</ul></li>
        </ul></div>`; 
    }

    return persons;
}*/