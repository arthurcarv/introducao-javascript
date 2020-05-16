var fieldFilter = document.querySelector("#table-filter");

fieldFilter.addEventListener("input", function () {
    var pacients = document.querySelectorAll(".pacient");

    if(this.value.length > 0) {
        for (var i = 0; i < pacients.length; i++) {
            var pacient = pacients[i];
            var tdName = pacient.querySelector(".info-name");
            var name = tdName.textContent;
            var expression = new RegExp(this.value, "i");

            if (!expression.test(nome)) {
                pacient.classList.add("invisible");
            } else {
                pacient.classList.remove("invisible");
            }
        }
    } else {
        for (var i = 0; i < pacients.length; i++) {
            var pacient = pacients[i];
            pacient.classList.remove("invisible");
        }
    }
})