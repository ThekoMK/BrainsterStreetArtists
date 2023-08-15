const selectElement = document.getElementById('chooseAnArtist');

// Function to fetch users from the API and populate them in the select element
async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        // Iterate through each user and create an option element for the select
        users.forEach(user => {
            const option = document.createElement('option');
            option.value = user.name;
            option.textContent = user.name;
            selectElement.appendChild(option);
            filterArtists.appendChild(option)
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

// Call the function to fetch users and populate the select element
fetchUsers();