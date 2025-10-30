const destinations = [
    { name: "Paris, France", details: "City of love, art, and timeless culture." },
    { name: "Tokyo, Japan", details: "Where tradition meets futuristic wonder." },
    { name: "Rome, Italy", details: "Home of ancient empires and culinary mastery." },
    { name: "Cairo, Egypt", details: "Unveil the mysteries of ancient civilization." },
    { name: "Dubai, UAE", details: "Opulence, innovation, and sky-high luxury." }
];

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const resultsPage = document.getElementById("resultsPage");
const destList = document.getElementById("destList");

searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = destinations.filter(d => d.name.toLowerCase().includes(query));

    if(query.trim() === ""){
        resultsDiv.style.display = "none";
        return;
    }

    resultsDiv.innerHTML = filtered.map(d => `<p onclick="showDestination('${d.name}')">${d.name}</p>`).join("");
    resultsDiv.style.display = filtered.length ? "block" : "none";
});

function showDestination(name) {
    const selected = destinations.filter(d => d.name === name);
    resultsPage.style.display = "block";
    destList.innerHTML = selected.map(d => `
        <div class="destination-card">
            <h3>${d.name}</h3>
            <p>${d.details}</p>
        </div>
    `).join("");
    window.scrollTo({ top: resultsPage.offsetTop, behavior: "smooth" });
}

/* Email Form Handler */
document.getElementById("emailForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you! You are now subscribed to TravelBloom updates.");
    this.reset();
});
