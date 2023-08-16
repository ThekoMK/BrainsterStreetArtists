import { ARTIST_HOMEPAGE_ROUTE_ID } from "../main.js";
import { ITEMS_SESSION_KEY } from "./landing.js";

const CHOSEN_ARTIST_NAME_SESSION_KEY = "chosenArtistName";

const artistsName = document.getElementById("artistsName");
const chosenArtist = document.getElementById("chooseAnArtist");
const joinAsArtistDiv = document.getElementById("joinAsArtist");

export const checkArtist = () => {
    joinAsArtistDiv.addEventListener("click", (e) => {
        if(e.target.value === "choose" || e.target.value == undefined) {
            chosenArtist.classList.add("border-4")
            setTimeout(() => {
                chosenArtist.classList.remove("border-4")
                console.log(e.target.value)
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

export const joinAsArtist = () => {
    const chosenArtistName = localStorage.getItem(CHOSEN_ARTIST_NAME_SESSION_KEY);
    artistsName.innerHTML = chosenArtistName;

    const chosenArtistItems = allItemsArray.filter(item => item.artist === chosenArtistName)

    let items = chosenArtistItems.length;
    let itemsSold = 0
    let priceSold = 0

    chosenArtistItems.forEach(item => {

        if (item.dateSold) {
            itemsSold = itemsSold + 1
            priceSold = priceSold + item.price
        }
    });

    console.log(priceSold)
    totalItemsSold.innerHTML = `${itemsSold}/${items}`;
    totalIncome.innerHTML = `$${priceSold}`; 
}
