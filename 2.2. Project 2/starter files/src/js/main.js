// Function to hide the landingPage and show visitorHomePage
function showVisitorHomePage() {
    const landingPage = document.getElementById('landingPage');
    const visitorHomePage = document.getElementById('visitorHomePage');
    landingPage.style.display = 'none';
    visitorHomePage.style.display = 'block';
}

// Event listener for click on "Join as Visitor" element
const joinAsVisitorBtn = document.getElementById('joinAsVisitor');
joinAsVisitorBtn.addEventListener('click', function () {
    // Update the URL hash to trigger the hash change event
    window.location.hash = 'visitor';
});

// Event listener for hash change event
window.addEventListener('hashchange', function () {
    // Check if the hash is 'visitorHomePage'
    if (window.location.hash === '#visitor') {
        showVisitorHomePage();
    }
});

// On initial page load, check if the URL has '#visitorHomePage' hash
if (window.location.hash === '#visitor') {
    showVisitorHomePage();
}