import QuakesController from './QuakesController.js';
import Quake from './Quake.js';

const routes = [
    { controller: new quakes('quakes'), file: 'earthquake-watch-app.html', label: 'Quakes' },
    { controller: parks, file: 'views/parks.html', label: 'Parks' }
  ];