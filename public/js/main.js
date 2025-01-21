import { BharatMap } from './modules/BharatMap.js';
import { MAP_CONFIG } from './config/mapConfig.js';

document.addEventListener('DOMContentLoaded', () => {
    window.bharatMap = new BharatMap(MAP_CONFIG);
    window.bharatMap.loadData();
});