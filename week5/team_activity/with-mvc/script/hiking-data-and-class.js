import model from './model.js';
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
  
          renderHike(imgBasePath, targetHike = "") {
              const item = document.createElement("li");
              

              item.addEventListener("click", (event) => {            
                this.showHikeDetails(event, item);            
                    }, true);    

              

          if(targetHike != ""){
            item.innerHTML = `<h2 id="hikeName">${this.name}</h2>
              <div class="flex-container">
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
                            <div>
                                <h3>Description</h3>
                                <p>${this.description}</p>
                            </div>
                            <div>
                                <h3>Direction</h3>
                                <p>${this.directions}</p>
                            </div> 
                                   
                    </div>`;     
            
            const inputElement = document.getElementById("inputComment");
            inputElement.innerHTML = "";
            var input = document.createElement("input");
            input.setAttribute("id", "comment_text");
            inputElement.appendChild(input);
            var button = document.createElement("button");
            button.setAttribute("id", "add_comment");
            var node = document.createTextNode("Add comment");
            button.appendChild(node);
            inputElement.appendChild(button);


            var button = document.createElement("button");
            var node = document.createTextNode("Back");
            button.appendChild(node);

            var element = document.getElementById("backButton");
            element.innerHTML = "";
            element.appendChild(button);
            
            document.getElementById("add_comment").addEventListener("click", () => {model.saveComment();}, false); 
            
              return item;
              
          } else {
            item.innerHTML = `<h2>${this.name}</h2>
              <div class="flex-container">
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
                    </div>
                    </div>`;
               
                    var element = document.getElementById("backButton");
                    element.innerHTML = "";
                    var input = document.getElementById("inputComment");
                    input.innerHTML = "";
            
              return item;
          }

              
            }

           
            showHikeDetails(event, item){              
              const targetHike = item.firstChild.textContent;              
              const list = document.getElementById("hikes");              
              list.innerHTML = "";              
              hikeList.forEach(hike => {               
                    if(hike.name == targetHike){
                      const currentHike = new Hike(this.name, this.imgSrc, this.imgAlt, this.distance, 
                        this.difficulty, this.description, this.directions);                      
              list.appendChild(this.renderHike(imgBasePath, targetHike));
                };

                model.showComments(targetHike);
                })
              
            }
    }
 
    
    export {
        hikeList,
        Hike
        }