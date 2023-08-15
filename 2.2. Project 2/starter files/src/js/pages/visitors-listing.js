const publishedItems = items.filter(item => item.isPublished)

function renderCard(cardWrapper, item, index) {
    const card = document.createElement("div");
    card.classList.add("w-full", "mt-4", `${index % 2 === 0 ? 'bg-backgroundLight' : 'bg-backgroundDark'}`, "card-shadow");

    const cardContent = `
        <img class="w-full" src="${item.image}" alt="art image" />
        <div class="py-1 px-3">
            <div class="flex items-center justify-between">
                <h5 class="mb-2 text-4xl font-reenie tracking-tight ${index % 2 === 0 ? 'text-backgroundDark' : 'text-backgroundLight'
        }">${item.artist}</h5>
                <span class="px-2 rounded border ${index % 2 === 0 ? 'text-backgroundLight bg-backgroundDark' : 'text-backgroundDark bg-backgroundLight'
        }">${item.price}$</span>
            </div>
            <h5 class="${index % 2 === 0 ? 'text-backgroundDark' : 'text-backgroundLight'
        } text-xl">${item.title}</h5>
            <p class="mb-3 font-roboto text-sm ${index % 2 === 0 ? 'text-backgroundDark' : 'text-backgroundLight'
        }">${item.description}</p>
        </div>
    `;

    card.innerHTML = cardContent;
    cardWrapper.appendChild(card);
}

const cardWrapper = document.getElementById("card-container"); // Replace with your actual card wrapper element

const renderAllCards = () => {
    publishedItems.forEach((item, index) => {
        renderCard(cardWrapper, item, index);
    });
}

renderAllCards();

// Filtering

// const filterButton = document.getElementById("filterButton");
// const filterContainer = document.querySelector(".filters");

// const itemTitle = document.querySelector("#filterByTitle")
// const minPrice = document.querySelector("#filterMinimum")
// const maxPrice = document.querySelector("#filterMaximum")
// const typeInput = document.querySelector("#filterByType")
// const applyBtn = document.querySelector("#filterReady")
// const filterArtists = document.querySelector("#filterByArtist")

// filterButton.addEventListener("click", () => {
//     filterButton.classList.add("hidden");
//     filterContainer.classList.remove("hidden");
//     cardWrapper.classList.add("hidden");
// });

// itemTypes.forEach((type) => {
//     const option = document.createElement("option");
//     option.value = type;
//     option.innerText = type;
//     typeInput.appendChild(option);
// })


// // ----------

// const storageFilterValues = () => {// Stores all values from the filters in LS
//     let filterValues = {
//         itemTitle: itemTitle.value,
//         artist: filterArtists.value,
//         minPrice: minPrice.value,
//         maxPrice: maxPrice.value,
//         type: typeInput.value
//     }
//     localStorage.setItem("filter", JSON.stringify(filterValues))
// }

// const getItem = (key) => { // Gets values from local storage
//     let item = JSON.parse(localStorage.getItem(key))
//     return item
// }

// const filterCards = () => {
//     const filterV = getItem("filter") // Gets the values of filters from LC

//     const filteredItems = publishedItems.filter(
//         (item) =>
//             (filterV.itemTitle ? item.title.toLowerCase()
//                 .includes(filterV.itemTitle.toLowerCase()) : true) &&
//             (filterV.artist ? item.artist === filterV.artist : true) &&
//             (filterV.minPrice ? item.price >= filterV.minPrice : true) &&
//             (filterV.maxPrice ? item.price <= filterV.maxPrice : true) &&
//             (filterV.typeInput ? item.typeInput === filterV.typeInput : true)
//     )

//     filteredItems.forEach((item, index) => {
//         renderCard(cardWrapper, item, index);
//     });

//     localStorage.setItem("filtering", false)  // After filtering the cards toggle the filter flag
// }

// // applyBtn.addEventListener("click", () => {
// //     cardWrapper.innerHTML = "";
// //     filterCards()
// //     localStorage.setItem("filtering", true) //Toggle the filter flag to true
// //     location.reload() //
// // })

// applyBtn.addEventListener("click", () => {
//     filterContainer.classList.add("hidden");
//     filterButton.classList.remove("hidden");
//     cardWrapper.classList.remove("hidden");

//     cardWrapper.innerHTML = "";
//     filterCards()
//     localStorage.setItem("filtering", true) //Toggle the filter flag to true
//     location.reload() //
// });

const filterButton = document.getElementById("filterButton");
const filterContainer = document.querySelector(".filters");
const closeFilterContaier = document.getElementById('closeBtn');

const itemTitle = document.querySelector("#filterByTitle");
const minPrice = document.querySelector("#filterMinimum");
const maxPrice = document.querySelector("#filterMaximum");
const typeInput = document.querySelector("#filterByType");
const applyBtn = document.querySelector("#filterReady");
const filterArtists = document.querySelector("#filterByArtist");

const clearInputs = () => {
    itemTitle.value = "";
    filterArtists.value = "";
    minPrice.value = "";
    maxPrice.value = "";
    typeInput.value = "";
}

filterButton.addEventListener("click", () => {
    filterButton.classList.add("hidden");
    filterContainer.classList.remove("hidden");
    cardWrapper.classList.add("hidden");
});

itemTypes.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.innerText = type;
    typeInput.appendChild(option);
});

fetchUsers(filterArtists)

const storageFilterValues = () => {
    let filterValues = {
        itemTitle: itemTitle.value,
        artist: filterArtists.value,
        minPrice: minPrice.value,
        maxPrice: maxPrice.value,
        type: typeInput.value,
    };
    localStorage.setItem("filter", JSON.stringify(filterValues));
};

const getItem = (key) => {
    let item = JSON.parse(localStorage.getItem(key));
    return item;
};

const filterCards = () => {
    let filterV = getItem("filter");

    const filteredItems = publishedItems.filter(
        (item) =>
            (filterV.itemTitle
                ? item.title.toLowerCase().includes(filterV.itemTitle.toLowerCase())
                : true) &&
            (filterV.artist ? item.artist === filterV.artist : true) &&
            (filterV.minPrice ? item.price >= filterV.minPrice : true) &&
            (filterV.maxPrice ? item.price <= filterV.maxPrice : true) &&
            (filterV.typeInput ? item.typeInput === filterV.typeInput : true)
    );

    if(filteredItems.length === 0) {
        alert("No items found with the filters or no filters added!")
        renderAllCards();
    } else {
        filteredItems.forEach((item, index) => {
            renderCard(cardWrapper, item, index);
        });
    }


    localStorage.setItem("filtering", false);
};

applyBtn.addEventListener("click", () => {
    filterContainer.classList.add("hidden");
    filterButton.classList.remove("hidden");
    cardWrapper.classList.remove("hidden");
    storageFilterValues();

    cardWrapper.innerHTML = "";

    filterCards();

    clearInputs();
    
    // Store the filter values in localStorage

    localStorage.setItem("filtering", true);
});

closeFilterContaier.addEventListener("click", () => {
    filterContainer
});

