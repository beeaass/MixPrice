export function initSearch() {
    const searchInput = document.getElementById("searchInput") as HTMLInputElement;
    const searchResults = document.getElementById("searchResults");
    const resultsBody = searchResults?.querySelector("tbody");

    searchInput?.addEventListener("keyup", () => {
        const filter = searchInput.value.trim().toLowerCase();
        if (resultsBody) resultsBody.innerHTML = "";
        if (!filter) {
            searchResults?.style.setProperty("display", "none");
            return;
        }

        const rows = Array.from(document.querySelectorAll(".section tbody tr"));
        const matches = rows.filter(row => row.textContent?.toLowerCase().includes(filter));

        if (matches.length) {
            matches.forEach(row => resultsBody?.appendChild(row.cloneNode(true)));
            searchResults?.style.setProperty("display", "table");
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            searchResults?.style.setProperty("display", "none");
        }
    });
}
