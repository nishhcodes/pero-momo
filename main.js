document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".responsive-nav img"); // Hamburger menu button
    const navItems = document.querySelector(".nav-items"); // The navigation items container

    // Toggle navItems visibility when hamburger menu is clicked
    hamburger.addEventListener("click", function (e) {
        navItems.classList.toggle("active"); // Toggle the 'active' class
        e.stopPropagation(); // Prevent the click event from bubbling up to the document
    });

    // Close navItems if clicked outside the nav menu
    document.addEventListener("click", function (e) {
        // Check if the clicked element is not the hamburger or the nav menu
        if (!navItems.contains(e.target) && !hamburger.contains(e.target)) {
            navItems.classList.remove("active"); // Close the nav menu
        }
    });
});
