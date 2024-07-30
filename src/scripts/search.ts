export function initSearch() {
    document.getElementById("searchInput")?.addEventListener("keyup", function (event) {
        let filter = (this as HTMLInputElement).value.toLowerCase();
        let sections = document.querySelectorAll(".section");
        let searchResults = document.getElementById("searchResults")?.querySelector("tbody");

        if (searchResults) {
            searchResults.innerHTML = "";
        }

        if (filter === "") {
            document.getElementById("searchResults")!.style.display = "none";
            return;
        }

        let found = false;
        sections.forEach((section) => {
            let rows = section.querySelectorAll("tbody tr");
            rows.forEach((row) => {
                let text = row.textContent?.toLowerCase() || "";
                if (text.indexOf(filter) > -1) {
                    let resultRow = row.cloneNode(true) as HTMLTableRowElement;
                    searchResults?.appendChild(resultRow);
                    found = true;
                }
            });
        });

        document.getElementById("searchResults")!.style.display = found ? "table" : "none";
    });
}
