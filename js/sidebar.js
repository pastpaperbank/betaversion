document.addEventListener('DOMContentLoaded', function () {
    var clicker = document.querySelector('.second_sidebar_clicker');

    clicker.addEventListener('click', function () {
        clicker.classList.toggle('clicked');
    });
});
