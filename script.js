function performSearch() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("results");

    if (!input.trim()) {
        alert("Please enter a destination.");
        return;
    }

    results.scrollIntoView({ behavior: "smooth" });
}
