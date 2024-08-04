export function initThemeToggle() {
    const themeToggle = document.getElementById("themeToggle") as HTMLButtonElement;
    const toggleTheme = () => {
        const newTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem("theme", newTheme);
        themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
    };

    document.documentElement.dataset.theme = localStorage.getItem("theme") || "light";
    themeToggle.textContent = document.documentElement.dataset.theme === "dark" ? "☀️" : "🌙";
    themeToggle.onclick = toggleTheme;
}
