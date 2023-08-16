import {items} from "../../../Data/data.js"

export const ARTIST_NAMES_SESSION_KEY = "artistNames";
export const CHOSEN_ARTIST_NAME_SESSION_KEY = "chosenArtistName";

export const ITEMS_SESSION_KEY = "artistsItems";

// const selectArtist = document.getElementById("chooseAnArtist");

export const fetchArtists = () => {

    if(!localStorage.getItem(ITEMS_SESSION_KEY)) {
        const serializedItems = JSON.stringify(items);
        localStorage.setItem(ITEMS_SESSION_KEY, serializedItems);
    }

    const selectArtistDropdown = document.getElementById("chooseAnArtist");
    let artistNames = localStorage.getItem(ARTIST_NAMES_SESSION_KEY);
    if(!artistNames) {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(result => result.json())
        .then(artists => {
            artistNames = artists.map(artist => artist.name);
            localStorage.setItem(ARTIST_NAMES_SESSION_KEY, JSON.stringify(artistNames));
        })
    }

    const artistNamesArray = JSON.parse(artistNames);

    renderOptions(artistNamesArray, selectArtistDropdown);
}


export const renderOptions = (array, selectElement) => {
    array.forEach(item => {
        const option = document.createElement('option');
        option.textContent = item;
        selectElement.appendChild(option);
    });
}