// This app uses an MVC (model, view, controller) pattern
'use strict'
//create an array of hikes. This is model
const hikeList = [
    {
      name: "Bechler Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description:
        "Beautiful short hike along the Bechler river to Bechler Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    },
    {
      name: "Teton Canyon",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description: "Beautiful short (or long) hike through Teton Canyon.",
      directions:
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
      name: "Denanda Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "7 miles",
      difficulty: "Moderate",
      description:
        "Beautiful hike through Bechler meadows river to Denanda Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }
  ];
  
  const imgBasePath = "//byui-cit.github.io/cit261/examples/";
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



  // My code starting from here

  class Hike {
    constructor(name, imgSrc, imgAlt, distance, difficulty, description, directions) {
        this.name = name;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
        this.distance = distance;
        this.difficulty = difficulty;
        this.description = description;
        this.directions = directions;
        }

        renderHike(imgBasePath) {
            const item = document.createElement("li");
          
            item.innerHTML = ` <h2>${this.name}</h2>
                  <div class="image"><img src="${imgBasePath}${this.imgSrc}" alt="${this.imgAlt}"></div>
                  <div>
                          <div>
                              <h3>Distance</h3>
                              <p>${this.distance}</p>
                          </div>
                          <div>
                              <h3>Difficulty</h3>
                              <p>${this.difficulty}</p>
                          </div>                          
                  </div>`;
          
            return item;
          }
  }
 

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


  