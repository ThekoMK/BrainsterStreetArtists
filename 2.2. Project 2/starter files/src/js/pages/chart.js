import { CHOSEN_ARTIST_NAME_SESSION_KEY, CHOSEN_ARTIST_ITEMS_SESSION_KEY } from "./artists-homepage.js"

let myChart;

export function drawChart() {
    const last7 = document.querySelector('#last7');
    const last14 = document.querySelector('#last14');
    const last30 = document.querySelector('#last30');
    const chosenArtist = localStorage.getItem(CHOSEN_ARTIST_NAME_SESSION_KEY);

    const allItems = JSON.parse(localStorage.getItem(CHOSEN_ARTIST_ITEMS_SESSION_KEY));

    
}