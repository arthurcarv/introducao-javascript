var addButton = document.querySelector("#add-pacient");
addButton.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-add");

    var pacient = getPacientFromForm(form);

    var errors = validatePacient(pacient);

    if (errors.length > 0) {
        showErrorMessage(errors);

        return;
    }

    addPacientOnTable(pacient);

    form.reset();

    var errorMessage = document.querySelector("#error-message");
    errorMessage.innerHTML = "";

});

function getPacientFromForm(form) {

    var pacient = {
        name: form.name.value,
        weight: form.weight.value,
        height: form.height.value,
        bodyfat: form.bodyfat.value,
        imc: calculateImc(form.weight.value, form.height.value)
    }

    return pacient;
}

function buildTr(pacient) {
    var pacientTr = document.createElement("tr");
    pacientTr.classList.add("pacient");

    pacientTr.appendChild(buildTd(pacient.name, "info-name"));
    pacientTr.appendChild(buildTd(pacient.weight, "info-weight"));
    pacientTr.appendChild(buildTd(pacient.height, "info-height"));
    pacientTr.appendChild(buildTd(pacient.bodyfat, "info-bodyfat"));
    pacientTr.appendChild(buildTd(pacient.imc, "info-imc"));

    return pacientTr;
}

function buildTd(data, class) {
    var td = document.createElement("td");
    td.classList.add(class);
    td.textContent = data;

    return td;
}

function validatePacient(pacient) {

    var errors = [];

    if (paciente.name.length == 0) {
        errors.push("O nome não pode ser em branco");
    }

    if (pacient.bodyfat.length == 0) {
        errors.push("A gordura não pode ser em branco");
    }

    if (pacient.weight.length == 0) {
        errors.push("O peso não pode ser em branco");
    }

    if (pacient.height.length == 0) {
        errors.push("A altura não pode ser em branco");
    }

    if (!validaPeso(pacient.weight)) {
        errors.push("Peso é inválido");
    }

    if (!validaAltura(pacient.height)) {
        errors.push("Altura é inválida");
    }

    return errors;
}

function showErrorMessage(errors) {
    var ul = document.querySelector("#error-message");
    ul.innerHTML = "";

    errors.forEach(function(error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}

function addPacientOnTable(pacient) {
    var pacientTr = montaTr(pacient);
    var table = document.querySelector("#pacients-table");
    table.appendChild(pacientTr);
}
