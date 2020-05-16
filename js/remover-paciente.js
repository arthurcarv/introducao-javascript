var pacients = document.querySelectorAll(".pacient");
var table = document.querySelector("#pacients-table");

table.addEventListener(dblclick, function (event) {
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function () {
        event.target.parentNode.remove();
    }, 500);
});