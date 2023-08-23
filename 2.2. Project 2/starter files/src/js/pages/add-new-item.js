import { CHOSEN_ARTIST_NAME_SESSION_KEY, CHOSEN_ARTIST_ITEMS_SESSION_KEY } from "./artists-homepage.js";
// import { ITEM_TO_EDIT_SESSION_KEY } from "./artists-items-page.js";
import { ADD_NEW_ITEM_ROUTE_ID, ARTISTS_ITEMS_ROUTE_ID  } from "../main.js"
import { renderCard } from "./artists-items-page.js";

const isPublishedInput = document.getElementById("publishedCheckbox");
const titleInput = document.getElementById("newItemTitle");
const descriptionInput = document.getElementById("newItemDescription");
const typeInput = document.getElementById("newItemType");
const priceInput = document.getElementById("newItemPrice");
const urlInput = document.getElementById("newItemUrl");
const addNewItemBtn = document.getElementById("addNewItemBtn");
const cancelButton = document.getElementById("cancel");

function clearInputs() {
    isPublishedInput.checked = false;
    titleInput.value = "";
    descriptionInput.value = "";
    typeInput.value = "";
    priceInput.value = "";
    urlInput.value = "";
}


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

    cancelButton.addEventListener("click", (e) => {
        e.preventDefault();
        clearInputs();
        location.hash = ARTISTS_ITEMS_ROUTE_ID
    
    })
}

export const editItems = (item) => {
    location.hash = ADD_NEW_ITEM_ROUTE_ID;
    addNewItemBtn.innerText = "Edit Item";

    isPublishedInput.checked = item.isPublished;
    titleInput.value = item.title;
    descriptionInput.value = item.description;
    typeInput.value = item.type;
    priceInput.value = item.price;
    urlInput.value = item.image;

    addNewItemBtn.addEventListener("click", (e) => {
        e.preventDefault()
        const updatedItem = {
            ...item,  // Keep other properties unchanged
            isPublished: isPublishedInput.checked,
            title: titleInput.value,
            description: descriptionInput.value,
            type: typeInput.value,
            price: priceInput.value,
            image: urlInput.value
        };

        // Update the item in local storage
        const items = JSON.parse(localStorage.getItem(CHOSEN_ARTIST_ITEMS_SESSION_KEY)) || [];
        const updatedItems = items.map(existingItem => {
            if (existingItem.id === item.id) {
                return updatedItem;
            }
            return existingItem;
        });
        localStorage.setItem(CHOSEN_ARTIST_ITEMS_SESSION_KEY, JSON.stringify(updatedItems));

        clearInputs();

        location.hash = ARTISTS_ITEMS_ROUTE_ID

        renderCard(updatedItem);
    })
}