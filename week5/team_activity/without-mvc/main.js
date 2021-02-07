import hikeList from './hike-list.js';
import Hikes from './Hikes.js';



  const imgBasePath = "//byui-cit.github.io/cit261/examples/";
  const myHike = new Hikes(hikeList, imgBasePath);
  //on load grab the array and insert it into the page
  window.addEventListener("load", () => {
    myHike.showHikeList();
  });
  
  
  
  
  
    
  