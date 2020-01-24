var filtro = document.querySelector("#filtrar-tabela");

filtro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for(var i = 0; i< pacientes.length; i++){
            var paciente =  pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            var expr = new RegExp(this.value, "i");

            if(!expr.test(nome)){
                paciente.classList.add("filtrado");
            }else{
                paciente.classList.remove("filtrado");
            }
    
        }
    }else{
        for(var i = 0; i< pacientes.length; i++){
            var paciente =  pacientes[i];
            paciente.classList.remove("filtrado");
        }
    }
})