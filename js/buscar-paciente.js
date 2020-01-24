var btnAdd = document.querySelector("#buscar-paciente");
btnAdd.addEventListener("click", function () {
    console.log("Buscando pacientes...");
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    var erroReq = document.querySelector("#erro-req");

    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            erroReq.classList.add("filtrado");
            var res = xhr.responseText;
            var pacientes = JSON.parse(res);
            pacientes.forEach(function (paciente) {
            addPacienteNaTabela(paciente)
        });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroReq.classList.remove("filtrado");
        }        
    });

    xhr.send();

    
})