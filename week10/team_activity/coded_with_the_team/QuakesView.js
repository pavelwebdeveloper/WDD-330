 // Quake View handler
export default class QuakesView {
  renderQuakeList(quakeList, listElement) {
    //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
    listElement.innerHTML = quakeList.features
    .map(quake => {
      return `<li data-id="${quake.id}" class="quake">
${quake.properties.title}, ${new Date(
        quake.properties.time
      )}
</li>`;
    })
    .join('');
  }
  renderQuake(quake, element) {
    const quakesHTML = element.innerHTML;
    const button = document.querySelector('button');
    button.classList.toggle('hidden', true);
    button.addEventListener('click', back(quakesHTML, element));
    const quakeProperties = Object.entries(quake.properties);
    element.innerHTML = quakeProperties
      .map(property => {
        return `<li>${property}</li>`;
      })
      .join('');
    // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
  }
}

function back(quakesHTML, element) {
    const button = document.querySelector('button');
    element.innerHTML = quakesHTML;
    button.classList.toggle('hidden', false);
    // button.removeEventListener('click', back);
}