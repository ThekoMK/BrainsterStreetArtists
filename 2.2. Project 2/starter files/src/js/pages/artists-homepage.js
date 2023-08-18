import { ARTIST_HOMEPAGE_ROUTE_ID } from "../main.js";
import { ITEMS_SESSION_KEY } from "./landing.js";

export const LIVE_AUCTIONING_ITEM_STATUS = "LiveAuctionStatus";
export const CHOSEN_ARTIST_NAME_SESSION_KEY = "chosenArtistName";
export const CHOSEN_ARTIST_ITEMS_SESSION_KEY = "chosenArtistItems";

const artistsName = document.querySelector(".artistsName");
const chosenArtist = document.getElementById("chooseAnArtist");
const joinAsArtistDiv = document.getElementById("joinAsArtist");

export const checkArtist = () => {
    joinAsArtistDiv.addEventListener("click", (e) => {
        if(e.target.value === "choose" || e.target.value == undefined) {
            chosenArtist.classList.add("border-4")
            setTimeout(() => {
                chosenArtist.classList.remove("border-4")
            }, 1000)
        } else {
            location.hash = ARTIST_HOMEPAGE_ROUTE_ID;
            localStorage.setItem(CHOSEN_ARTIST_NAME_SESSION_KEY, e.target.value);
            e.target.value = "choose";
        }
    })
}

const allItems = localStorage.getItem(ITEMS_SESSION_KEY);
const allItemsArray = JSON.parse(allItems);

const totalItemsSold = document.getElementById("totalItemsSold");
const totalIncome = document.getElementById("totalIncome");
const liveBid = document.getElementById("liveBid");

export const joinAsArtist = () => {
    const chosenArtistName = localStorage.getItem(CHOSEN_ARTIST_NAME_SESSION_KEY);
    artistsName.innerHTML = chosenArtistName;

    const chosenArtistItems = allItemsArray.filter(item => item.artist === chosenArtistName)
    localStorage.setItem(CHOSEN_ARTIST_ITEMS_SESSION_KEY, JSON.stringify(chosenArtistItems));

    let items = chosenArtistItems.length;
    let itemsSold = 0
    let priceSold = 0

    chosenArtistItems.forEach(item => {

        if (item.dateSold) {
            itemsSold = itemsSold + 1
            priceSold = priceSold + item.price
        }

        if(item.isAuctioning) {
            localStorage.setItem(LIVE_AUCTIONING_ITEM_STATUS, true);
            liveBid.innerHTML = `$${item.price}`;
        } else {
            liveBid.innerHTML = "Currently not auctioning"
            localStorage.setItem(LIVE_AUCTIONING_ITEM_STATUS, false);
        }
        

    });

    totalItemsSold.innerHTML = `${itemsSold}/${items}`;
    totalIncome.innerHTML = `$${priceSold}`;
}

export const hamburgerMenu = () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const hamburgerMenuItems = document.querySelector(".menu-container");
    let isMenuOpen = false;

    hamburgerMenu.addEventListener("click", (e) => {
        if(!isMenuOpen) {
            hamburgerMenuItems.classList.add("active-hamburger-menu");
            console.log(hamburgerMenuItems)
            isMenuOpen = true;
        } else {
            hamburgerMenuItems.classList.remove("active-hamburger-menu");
            console.log(hamburgerMenuItems)
            isMenuOpen = false;
        }
    })

    hamburgerMenuItems.addEventListener("click", (e) => {
        if (e.target.matches("a")) {
            hamburgerMenuItems.classList.remove("active-hamburger-menu");
        }
    })
}
