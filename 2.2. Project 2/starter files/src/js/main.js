


document.addEventListener('click', (e) => {
    if (e.target.closest("#joinAsVisitor")){
        location.hash = 'visitor';
    } else if(e.target.matches(".find-now-btn") || e.target.matches(".slide img")) {
        location.hash = 'visitor/listing'
    }
})

window,addEventListener('hashchange', handleRouting);
window.addEventListener('load', handleRouting);

function handleRouting() {
    let hash = location.hash;
    if(!hash) location.hash = "home";
    document.querySelectorAll("section").forEach(section => {
        `#${section.id}` !== hash ? section.style.display = "none" : section.style.display = "block";
    });
}
