
/* Selects the theme button from the HTML document. */
const themeToggle = document.getElementById("theme-toggle");

/* Changes the website between light and dark themes. */
function toggleTheme() {
    // Adds the dark-mode class if absent, or removes it if present.
    const isDarkMode = document.body.classList.toggle("dark-mode");

    // Updates the button text to describe the next available theme.
    themeToggle.textContent = isDarkMode
        ? "☀︎ Light Mode"
        : "⏾ Dark Mode";

    // Updates the accessible label and pressed state.
    themeToggle.setAttribute(
        "aria-label",
        isDarkMode ? "Switch to light mode" : "Switch to dark mode"
    );

    themeToggle.setAttribute("aria-pressed", String(isDarkMode));
}

/* Runs the theme function whenever the button is clicked. */
themeToggle.addEventListener("click", toggleTheme);