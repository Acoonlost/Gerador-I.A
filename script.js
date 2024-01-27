document.addEventListener("DOMContentLoaded", function () {
    fetchData();
});

function fetchData() {
    const selectedTopic = document.getElementById("topics").value;

    // Use fetch to get data from the API based on the selected topic
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
        content.textContent = item.content;

        slide.appendChild(title);
        slide.appendChild(content);
        presentationContainer.appendChild(slide);
    });
}
