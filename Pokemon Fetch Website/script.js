
async function FetchData() {
    // Accessed input value
    let input = document.getElementById("pokemon-input").value.toLowerCase();

    // Check if input is empty
    if (!input) return;

    try {
        // Fetch Pokémon data from the API
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Pokémon not found');
        }

        // Convert the response to JSON
        let data = await response.json();
      console.log(data)

        // Access Pokemon Image Source from API & Add it into img src through DOM
        let pokeUrl = data.sprites.front_default;
        let image = document.getElementById("pokemon-img");
        image.src = pokeUrl;

        // Display Pokemon Name
        let dataName = data.name.charAt(0).toUpperCase() + data.name.slice(1);  // Capitalize first letter
        let pokeName = document.getElementById("pokemon-name");
        pokeName.textContent = dataName;

        // Display Pokemon Type
        let dataType = data.types.map(typeInfo => typeInfo.type.name).join(', ');
        let pokeType = document.getElementById("pokemon-type");
        pokeType.textContent = `Type: ${dataType}`;

        // Hide the error message (if any)
        document.getElementById("error-msg").style.display= "none";

        // Show Pokemon info section
        document.getElementById("pokemon-info").style.display="block"

    } catch (error) {
        // Show error message if the Pokemon is not found or there's an issue with the fetch
        document.getElementById("error-msg").style.display = "block";

        // Hide the Pokemon info section
        document.getElementById("pokemon-info").style.display="hidden";
    }
}
