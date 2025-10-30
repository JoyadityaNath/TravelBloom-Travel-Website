function performSearch() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("results");

    if (!input.trim()) {
        alert("Please enter a destination.");
        return;
    }

    results.scrollIntoView({ behavior: "smooth" });
}
function performSearch() {
  let query = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let tags = card.getAttribute("data-tags");
    card.style.display = tags.includes(query) ? "block" : "none";
  });
}
