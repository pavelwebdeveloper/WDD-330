import { hikeList, Hike } from './hiking-data-and-class.js';
import comments from './comments-list.js';
import Comment from './Comment.js';
import model from './model.js';



// This app uses an MVC (model, view, controller) pattern
'use strict'

const imgBasePath = "//byui-cit.github.io/cit261/examples/";



    const controller = {
        load() {
            //on load grab the array and insert it into the page
            window.addEventListener("load", () => {
                view.showHikeList();
                });

            //document.getElementById("back").addEventListener("click", () => {view.showHikeList();});
          
            document.getElementById("backButton").addEventListener("click", () => {view.showHikeList();});

            
           
            model.showComments();
            }
        
        };
    


    const view = {
        
        showHikeList() {
            const hikeListElement = document.getElementById("hikes");
            hikeListElement.innerHTML = "";
            this.renderHikeList(hikeList, hikeListElement);
          },
        renderHikeList(hikeList, parent) {
            hikeList.forEach(hike => {
                //for(const hike of hikeList){
                const item = new Hike(hike.name, hike.imgSrc, hike.imgAlt, hike.distance, 
                    hike.difficulty, hike.description, hike.directions);
              parent.appendChild(item.renderHike(imgBasePath));
                })
            //};
            model.showComments(); 
        }    
         
        
    };

    
    


    

    
 controller.load();