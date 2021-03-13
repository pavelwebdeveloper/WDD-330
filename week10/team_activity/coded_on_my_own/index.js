import { getJSON, getLocation } from './utilities.js'
import QuakesController from './QuakesController.js'



const quakesController = new QuakesController('#quakeList');  
    quakesController.init();
    console.log(quakesController.getQuakesByRadius());

    document.getElementById('radius').addEventListener('keyup', getRadiusFromUser, false);
    document.getElementById('starttime').addEventListener('change', getDateFromUser, false); 
    document.getElementById('endtime').addEventListener('change', getDateFromUser, false); 
    document.getElementById('starttime').addEventListener('change', getRadiusFromUser, false);
    document.getElementById('endtime').addEventListener('change', getRadiusFromUser, false); 
    
    function getRadiusFromUser(){
      document.getElementById("backToListButton").classList.add("invisible");  
        //let starttime = document.getElementById("starttime").value;
        //let endtime = document.getElementById("endtime").value;
        let radius = parseInt(document.getElementById("radius").value);
        console.log("FROM RADIUS");
        //console.log(starttime);
        //console.log(endtime);
        console.log(radius);

        quakesController.init(radius);
        //quakesController.quakes.starttime = starttime;
        //quakesController.quakes.endtime = endtime;
          
      }

      function getDateFromUser(){
        let starttime = document.getElementById("starttime").value;
        let endtime = document.getElementById("endtime").value;
        let radius = parseInt(document.getElementById("radius").value);
        
        console.log("FROM DATE");
        console.log(starttime);
        console.log(endtime);
        

        quakesController.init(radius);
        quakesController.quakes.starttime = starttime;
        //quakesController.quakes.starttime = starttime;
        quakesController.quakes.endtime = endtime;
          
      }
    


const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
// url for testing with error
//const url = 'https://earthquake.usgs.gov/fdsnws/even';





/*https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=
2019-01-01&endtime=2019-03-02&latitude=43.814540699999995&longitude=-111.78491029999999&
maxradiuskm=100*/