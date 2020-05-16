var searchButton = document.querySelector("#search-pacients");
searchButton.addEventListener("click". function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function () {
        var ajaxError = document.querySelector("#ajax-error");

        if (xhr.status == 200) {
            ajaxError.classList.add("invisible");
            var answer = xhr.responseText;
            var pacients = JSON.parse(answer);

            pacients.forEach(function (pacient) {
                addPacientOnTable(pacient);
            });
        } else {
            ajaxError.classList.remove("invisible");
        }
    });

    xhr.send();
})