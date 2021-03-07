
// defining the function
const makeList =()=> {

    // the list of links
    const links = [
        {
          label: "Week1 notes",
          url: "week1/index.html"
        },
        {
            label: "Week2 notes",
            url: "week2/index.html"
          },
        {
            label: "Week3 notes",
            url: "week3/index.html"
          },
          {
            label: "Week4 notes",
            url: "week4/index.html"
          },
        {
            label: "Week5 notes",
            url: "week5/index.html"
          },
          {
            label: "Week6 notes",
            url: "week6/index.html"
          },
        {
            label: "Week7 notes",
            url: "week7/index.html"
          },
          {
            label: "Week8 notes",
            url: "week8/index.html"
          },
          {
            label: "Week9 notes",
            url: "week9/index.html"
          }
      ]

    
      // Reading the list of links from the array
    links.forEach(v => {

        // creating a new li element
        let li = document.createElement("li");

        // creating a new a element
        let a = document.createElement("a");

        // creating a text node
        let text = document.createTextNode(v.label);

        // apending the text node to the a element
        a.appendChild(text);

        // setting the href attribute for the newly created a element
        a.setAttribute("href", v.url);

        // appending the a element to the li element
        li.appendChild(a);

        // Selecting the ol element from the root index.html page
        let list = document.getElementById("list");

        // appending the li element to the selected list
        list.appendChild(li);
    })
}

// running the function
makeList();