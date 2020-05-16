var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";

var pacients = document.querySelectorAll(".pacient");

for (var i = 0; i < pacients.length; i++) {

    var pacient = pacients[i];

    var tdWeight = pacient.querySelector(".info-weight");
    var peso = tdPeso.textContent;

    var tdHeight = pacient.querySelector(".info-height");
    var height = tdHeight.textContent;

    var tdImc = pacient.querySelector(".info-imc");

    var weightIsValid = validateWeight(weight);
    var heightIsValid = validateHeight(height);

    if (!weightIsValid) {
        console.log("Peso inválido!");
        weightIsValid = false;
        tdImc.textContent = "Peso inválido";
        pacient.classList.add("invalid-pacient");
    }

    if (!heightIsValid) {
        console.log("Altura inválida!");
        heightIsValid = false;
        tdImc.textContent = "Altura inválida";
        pacient.classList.add("invalid-pacient");
    }

    if (weightIsValid && heightIsValid) {
        var imc = calculateImc(weight, height);
        tdImc.textContent = imc;
    }
}

function calculateImc(weight, height) {
    var imc = 0;
    imc = weight / (height * height);

    return imc.toFixed(2);
}

function validateWeight(weight) {

    if (weight >= 0 && weight <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validateHeight(height) {

    if (height >= 0 && height <= 3.00) {
        return true;
    } else {
        return false;
    }
}
