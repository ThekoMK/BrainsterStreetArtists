export const hamburgerMenuItems = () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu2");
    const hamburgerMenuItems = document.querySelector(".menu-container2");
    let isMenuOpen = false;

    hamburgerMenu.addEventListener("click", (e) => {
        if (!isMenuOpen) {
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
        if(e.target.matches("a")) {
            hamburgerMenuItems.classList.remove("active-hamburger-menu");
        }
    })
}