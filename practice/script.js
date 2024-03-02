const searchInput = document.getElementById("searchInput");
const results = document.getElementById('results');
results.style.display = 'none'; // Hide the results container initially

// Function to fetch data from the API
async function fetchData(searchQuery) {
    try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + searchQuery);
        const data = await response.json();
        return data.drinks; // Return the array of drinks
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to filter and display data based on user input
async function displayFilteredData() {
    searchInput.addEventListener("keyup", async (event) => {
        const { value } = event.target;

        // Toggle visibility of the results container based on search input length
        if (value.trim() !== "") {
            results.style.display = 'block'; // Show the results if search input is not empty
        } else {
            results.style.display = 'none'; // Hide the results if search input is empty
        }

        const searchQuery = value.toLowerCase();
        const filteredData = await fetchData(searchQuery);

        // Display filtered data
        if (filteredData) {
            results.innerHTML = filteredData.map(item => `<div class="name">${item.strDrink}</div>`).join('');
        } else {
            results.innerHTML = "<div>No results found</div>";
            results.classList.add('centered')
        }
    });
}

// Call the function to display filtered data
displayFilteredData();
