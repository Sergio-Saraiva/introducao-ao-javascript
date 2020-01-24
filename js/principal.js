var h1 = document.querySelector(".titulo");
h1.textContent = "Aperecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i< pacientes.length; i++){
    paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    var tdImc = paciente.querySelector(".info-imc");


    if (!pesoValido) {
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add('paciente-invalido');
        pesoValido = false;
    }

    if (!alturaValida) {
        console.log("Altura inválido");
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add('paciente-invalido');
        alturaValido = false;
    }

    if (pesoValido == true && alturaValida == true ) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;        
    }

}

function validaPeso(peso) {
    if(peso >= 0 && peso <1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura) {
    if(altura>= 0 && altura<= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}





