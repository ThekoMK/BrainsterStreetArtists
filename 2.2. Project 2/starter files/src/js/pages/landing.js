import {items} from "../../../Data/data.js"

export const ARTIST_NAMES_SESSION_KEY = "artistNames";
export const ITEMS_SESSION_KEY = "artistsItems";


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
    
    selectArtistDropdown.innerHTML = "";
    renderOptions(artistNamesArray, selectArtistDropdown);
}


export const renderOptions = (array, selectElement) => {
    const chooseOption = document.createElement('option');
    chooseOption.textContent = "Choose";
    chooseOption.value = "choose";
    chooseOption.disabled = true;
    chooseOption.selected = true;
    selectElement.appendChild(chooseOption);

    array.forEach(item => {
        const option = document.createElement('option');
        option.textContent = item;
        selectElement.appendChild(option);
    });
}