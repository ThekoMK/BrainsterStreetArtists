import { CHOSEN_ARTIST_NAME_SESSION_KEY, CHOSEN_ARTIST_ITEMS_SESSION_KEY } from "./artists-homepage.js"

export const hamburgerMenuItems = () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu2");
    const hamburgerMenuItems = document.querySelector(".menu-container2");
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
        if(e.target.matches("a")) {
            hamburgerMenuItems.classList.remove("active-hamburger-menu");
        }
    })
}

const cardsContainer = document.getElementById("cardsContainer")
const renderCard = (item) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("w-full", "mt-5", "bg-backgroundLight");


    cardDiv.innerHTML = `
                <img class="w-full h-[200px]" src="${item.image}" alt="${item.title}" />
                <div class="py-1 px-3">
                    <div class="flex items-center justify-between">
                        <div>
                            <h5 class="text-2xl text-backgroundDark">${item.title}</h5>
                            <small class="text-backgroundDark">${new Date(item.dateCreated).toLocaleDateString()}</small>
                        </div>
                        <span class="px-2 rounded border bg-backgroundDark text-backgroundLight">${item.price}$</span>
                    </div>
                    <p class="my-3 font-roboto text-backgroundDark">${item.description}</p>
                </div>
                <div class="bg-backgroundDark py-3">
                    <div class="w-full flex justify-around">
                        <button class="bg-[#1B59AC] text-white py-1 px-4 rounded" data-item-id="${item.id}">Send to Auction</button>
                        <button class="${item.isPublished ? "bg-unPublishGreen text-white" : "bg-[#E5E5E5] text-textButton"} py-1 px-4 rounded toggle-publish" data-item-id="${item.id}">${item.isPublished ? "Unpublish" : "Publish"}</button>
                        <button class="bg-cardBackground2 text-backgroundLight py-1 px-4 rounded" data-item-id="${item.id}">Remove</button>
                        <button class="bg-backgroundLight text-backgroundDark py-1 px-4 rounded" data-item-id="${item.id}">Edit</button>
                    </div>
                </div>`

    cardsContainer.appendChild(cardDiv);

    const togglePublish = document.querySelectorAll(".toggle-publish");
}

export const populateArtistItems = () => {
    const artistItems = localStorage.getItem(CHOSEN_ARTIST_ITEMS_SESSION_KEY);
    const artistItemsParsed = JSON.parse(artistItems);
    console.log(artistItemsParsed);

    cardsContainer.innerHTML = "";
    artistItemsParsed.forEach(item => {
        renderCard(item);
    })
}

