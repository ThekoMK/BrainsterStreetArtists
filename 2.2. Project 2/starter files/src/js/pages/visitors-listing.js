import {
    ARTIST_NAMES_SESSION_KEY,
    ITEMS_SESSION_KEY,
    renderOptions,
} from "./landing.js";
import { itemTypes } from "../../../Data/data.js";
// import { renderOptions, ARTIST_NAMES_SESSION_KEY } from "./landing.js";

export const ADDED_FILTER_VALUES_SESSION_KEY = "filter";

export const populateVisitorsListingPage = () => {
    const artistsItems = localStorage.getItem(ITEMS_SESSION_KEY);
    const artistsItemsParsed = JSON.parse(artistsItems);

    const publishedItems = artistsItemsParsed.filter(
        (item) => item.isPublished
    );

    function renderCard(cardWrapper, item, index) {
        const card = document.createElement("div");
        card.classList.add(
            "w-full",
            "mt-4",
            `${index % 2 === 0 ? "bg-backgroundLight" : "bg-backgroundDark"}`,
            "card-shadow"
        );

        const cardContent = `
        <img class="w-full" src="${item.image}" alt="art image" />
        <div class="py-1 px-3">
            <div class="flex items-center justify-between">
                <h5 class="mb-2 text-4xl font-reenie tracking-tight ${index % 2 === 0
                ? "text-backgroundDark"
                : "text-backgroundLight"
            }">${item.artist}</h5>
                <span class="px-2 rounded border ${index % 2 === 0
                ? "text-backgroundLight bg-backgroundDark"
                : "text-backgroundDark bg-backgroundLight"
            }">${item.price}$</span>
            </div>
            <h5 class="${index % 2 === 0 ? "text-backgroundDark" : "text-backgroundLight"
            } text-xl">${item.title}</h5>
            <p class="mb-3 font-roboto text-sm ${index % 2 === 0 ? "text-backgroundDark" : "text-backgroundLight"
            }">${item.description}</p>
        </div>
    `;

        card.innerHTML = cardContent;
        cardWrapper.appendChild(card);
    }

    const cardWrapper = document.getElementById("card-container"); // Replace with your actual card wrapper element

    const renderAllCards = (positionWhereTheCardGoes, arr) => {
        cardWrapper.innerHTML = "";
        arr.forEach((item, index) => {
            renderCard(positionWhereTheCardGoes, item, index);
        });
    };

    // renderAllCards(cardWrapper);

    // renderAllCards();

    const filterButton = document.getElementById("filterButton");
    const filterContainer = document.querySelector(".filters");
    const closeBtn = document.getElementById("closeBtn");

    const itemTitle = document.querySelector("#filterByTitle");
    const minPrice = document.querySelector("#filterMinimum");
    const maxPrice = document.querySelector("#filterMaximum");
    const typeInput = document.querySelector("#filterByType");
    const applyBtn = document.querySelector("#filterReady");
    const filterArtists = document.querySelector("#filterByArtist");

    const artistNames = localStorage.getItem(ARTIST_NAMES_SESSION_KEY);
    const artistNamesParsed = JSON.parse(artistNames);

    renderOptions(artistNamesParsed, filterArtists);
    renderOptions(itemTypes, typeInput);

    const clearInputs = () => {
        itemTitle.value = "";
        filterArtists.value = "";
        minPrice.value = "";
        maxPrice.value = "";
        typeInput.value = "";
    };

    filterButton.addEventListener("click", () => {
        filterButton.classList.add("hidden");
        filterContainer.classList.remove("hidden");
        cardWrapper.classList.add("hidden");
    });

    const storageFilterValues = () => {
        let filterValues = {
            itemTitle: itemTitle.value,
            artist: filterArtists.value,
            minPrice: minPrice.value,
            maxPrice: maxPrice.value,
            type: typeInput.value,
        };
        localStorage.setItem(
            ADDED_FILTER_VALUES_SESSION_KEY,
            JSON.stringify(filterValues)
        );
    };

    const getItemFromLC = (key) => {
        let item = JSON.parse(localStorage.getItem(key));
        return item;
    };

    
    const filterCards = () => {
        let filterV = getItemFromLC(ADDED_FILTER_VALUES_SESSION_KEY);
        // console.log(filterV);

        if (filterV === null) {
            filterV = {
                itemTitle: "",
                artist: "Choose",
                minPrice: "",
                maxPrice: "",
                type: "Choose",
            };
        }

        const filteredItems = publishedItems.filter((item) => {
            const matchesItemTitle = !filterV.itemTitle || item.title.toLowerCase().includes(filterV.itemTitle.toLowerCase());
            const matchesArtist = filterV.artist === 'Choose' || item.artist === filterV.artist;
            const matchesMinPrice = !filterV.minPrice || item.price >= parseFloat(filterV.minPrice);
            const matchesMaxPrice = !filterV.maxPrice || item.price <= parseFloat(filterV.maxPrice);
            const matchesType = filterV.type === 'Choose' || item.type === filterV.type;

            return matchesItemTitle && matchesArtist && matchesMinPrice && matchesMaxPrice && matchesType;
        });

        console.log(filteredItems);

        if(filteredItems.length === 0) {
            cardWrapper.innerHTML = "";
            renderAllCards(cardWrapper, publishedItems)
        } else {
            renderAllCards(cardWrapper, filteredItems);
        }
    };
    
    filterCards();

    applyBtn.addEventListener("click", () => {
        filterContainer.classList.add("hidden");
        filterButton.classList.remove("hidden");
        cardWrapper.classList.remove("hidden");

        storageFilterValues();

        filterCards();

        // clearInputs();

        // Store the filter values in localStorage

    });

    closeBtn.addEventListener("click", () => {
        filterContainer.classList.add("hidden");
        filterButton.classList.remove("hidden");
        cardWrapper.classList.remove("hidden");
    });
};
