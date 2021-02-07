import { hikeList, Hike } from './hiking-data-and-class.js';



// This app uses an MVC (model, view, controller) pattern
'use strict'

const imgBasePath = "//byui-cit.github.io/cit261/examples/";



    const controller = {
        load() {
            //on load grab the array and insert it into the page
            window.addEventListener("load", () => {
                view.showHikeList();
                });
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
        }
    };

    
 controller.load();


  







 //on load grab the array and insert it into the page
  /*window.addEventListener("load", () => {
    showHikeList();
  });
  
  function showHikeList() {
    const hikeListElement = document.getElementById("hikes");
    hikeListElement.innerHTML = "";
    renderHikeList(hikeList, hikeListElement);
  }
  
  function renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
      parent.appendChild(renderOneHike(hike));
    });
  }
  function renderOneHike(hike) {
    const item = document.createElement("li");
  
    item.innerHTML = ` <h2>${hike.name}</h2>
          <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
          </div>`;
  
    return item;
  }*/
