document.addEventListener("DOMContentLoaded", function () {
    // No need to fetch data on page load, now triggered by button click
});

function fetchData() {
    const selectedTopic = document.getElementById("topic").value;

    // Check if the topic input is not empty
    if (selectedTopic.trim() === "") {
        alert("Por favor, insira um tópico válido.");
        return;
    }

    // Use fetch to get data from the API based on the entered topic
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedTopic}`)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error("Error fetching data:", error));
}

function displayData(data) {
    const presentationContainer = document.getElementById("presentation-container");
    presentationContainer.innerHTML = ""; // Clear previous content

    // Create HTML elements based on API data
    data.forEach(item => {
        const slide = document.createElement("div");
        slide.classList.add("slide");

        const title = document.createElement("h2");
        title.textContent = item.title;

        const content = document.createElement("p");
        content.textContent = item.body;

        slide.appendChild(title);
        slide.appendChild(content);
        presentationContainer.appendChild(slide);
    });
            }
