// script.js
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseover', function() {
            this.querySelector('.submenu').style.display = 'block';
        });

        dropdown.addEventListener('mouseout', function() {
            this.querySelector('.submenu').style.display = 'none';
        });
    });
});