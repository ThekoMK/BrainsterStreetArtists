import { fetchArtists } from "./pages/landing.js";
import { populateVisitorsListingPage } from "./pages/visitors-listing.js";
import { populateVisitorsHomePage } from "./pages/visitors-homepage.js";
import { joinAsArtist, checkArtist } from "./pages/artists-homepage.js";
import { drawChart } from "./pages/chart.js"

const PAGE_SECTION = ".page-section";
const LANDING_PAGE_ROUTE_ID = "#home";
const VISITOR_PAGE_ROUTE_ID = "#visitor";
const VISITOR_LISTING_ROUTE_ID = "#visitorListing";
export const ARTIST_HOMEPAGE_ROUTE_ID = "#artists";


const ALLOWED_ROUTES = [
    LANDING_PAGE_ROUTE_ID,
    VISITOR_PAGE_ROUTE_ID,
    VISITOR_LISTING_ROUTE_ID,
    ARTIST_HOMEPAGE_ROUTE_ID,
];


document.addEventListener("click", (e) => {
    if (e.target.closest("#joinAsVisitor")) {
        location.hash = VISITOR_PAGE_ROUTE_ID;
    } else if (
        e.target.matches(".find-now-btn") ||
        e.target.matches(".slide img")
    ) {
        location.hash = VISITOR_LISTING_ROUTE_ID;
    } 
});

const handeRoute = () => {
    const currentHash = location.hash || LANDING_PAGE_ROUTE_ID;

    if (!ALLOWED_ROUTES.includes(currentHash)) {
        location.hash = LANDING_PAGE_ROUTE_ID;
    }

    document
        .querySelectorAll(PAGE_SECTION)
        .forEach((pageSection) => (pageSection.style.display = "none"));

    const currentHashSection = document.querySelector(currentHash);
    
    currentHashSection.style.display = "block";

    switch (currentHash) {
        case LANDING_PAGE_ROUTE_ID:
            fetchArtists();
            checkArtist();
            break;
        case VISITOR_PAGE_ROUTE_ID:
            populateVisitorsHomePage();
            break;
        case VISITOR_LISTING_ROUTE_ID:
            populateVisitorsListingPage();
            break;
        case ARTIST_HOMEPAGE_ROUTE_ID:
            joinAsArtist();
            drawChart();
            break;
        default:
            break;
    }
};

window.addEventListener("hashchange", handeRoute);
window.addEventListener("load", handeRoute);

const menu = document.getElementById("hamburgerMenu");
const actualMenu = document.getElementById("actualMenu");

menu.addEventListener("click", () => {
    if (actualMenu.classList.contains("active-hamburger-menu")){
        actualMenu.style.top = "-100%";
    } else {
        actualMenu.classList.add("active-hamburger-menu");
    }
})
