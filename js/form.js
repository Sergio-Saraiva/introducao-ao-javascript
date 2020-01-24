var btn = document.querySelector("#adicionar-paciente");
btn.addEventListener("click", function () {
    event.preventDefault();

    var form = document.querySelector("#form-add");

    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0) {
        exibeMensagemErro(erros)
        return;
    }
    
    addPacienteNaTabela(paciente)

    form.reset();
    document.querySelector("#mensagens-erro").innerHTML = "";
});

function addPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tBody = document.querySelector("#tabela-pacientes");
    tBody.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {
    //extraindo informações do form
    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };
    return paciente;
}

function montaTr(paciente) {

    //cria tr e td dos pacientes
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add("paciente");

    //adicionando paciente na tabela
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr; 
}

function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser vazio");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("O peso é inválido!");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser vazia");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser nulo");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser nula");
    }

    return erros;

}

function exibeMensagemErro(erros) {
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}