const searchInput = document.getElementById("searchInput");
const namesFromDOM = document.getElementsByClassName("name");
const results = document.getElementById('results');
results.style.display = 'none'; // Hide the results container initially

searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;
    
    // Toggle visibility of the results container based on search input length
    if (value.trim() !== "") {
        results.style.display = 'block'; // Show the results if search input is not empty
    } else {
        results.style.display = 'none'; // Hide the results if search input is empty
    }
    
    const searchQuery = value.toLowerCase();
    
    for (const nameElement of namesFromDOM) {
        let name = nameElement.textContent.toLowerCase();
        
        if (name.includes(searchQuery)) {
            nameElement.style.display = "block";
        } else {
            nameElement.style.display = "none";
        }
    }
});
