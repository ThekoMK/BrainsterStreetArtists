
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

publishedItems.forEach((item, index) => {
    renderCard(cardWrapper, item, index);
});