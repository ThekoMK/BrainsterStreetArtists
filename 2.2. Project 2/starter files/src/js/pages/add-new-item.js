import { CHOSEN_ARTIST_NAME_SESSION_KEY } from "./artists-homepage.js";

export const hamburgerMenuItemsAdd = () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu3");
    const hamburgerMenuItems = document.querySelector(".menu-container3");
    let isMenuOpen = false;

    hamburgerMenu.addEventListener("click", (e) => {
        if (!isMenuOpen) {
            hamburgerMenuItems.classList.add("active-hamburger-menu");
            isMenuOpen = true;
        } else {
            hamburgerMenuItems.classList.remove("active-hamburger-menu");
            isMenuOpen = false;
        }

    })

    hamburgerMenuItems.addEventListener("click", (e) => {
        if (e.target.matches("a")) {
            hamburgerMenuItems.classList.remove("active-hamburger-menu");
        }
    })
}

export const populateAddNewItem = () => {
    const chosenArtist = localStorage.getItem(CHOSEN_ARTIST_NAME_SESSION_KEY);

    const addNewItemContainer = document.querySelector(".artistsNameee");
    addNewItemContainer.textContent = chosenArtist;
}