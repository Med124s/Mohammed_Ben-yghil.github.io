// ============================ Toggle Switcher ===============================
const switcherToggle = document.querySelector(".style-switcher-toggler");
switcherToggle.addEventListener('click', () => {
        console.log("hey")
        document.querySelector(".style-switcher").classList.toggle("open")
    })
    // Remove switcher if scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})