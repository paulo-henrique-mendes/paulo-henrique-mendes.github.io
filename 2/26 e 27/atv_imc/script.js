/*
        MENOR QUE 18,5	MAGREZA	0
        ENTRE 18,5 E 24,9	NORMAL	0
        ENTRE 25,0 E 29,9	SOBREPESO	I
        ENTRE 30,0 E 39,9	OBESIDADE	II
        MAIOR QUE 40,0	OBESIDADE GRAVE
*/

// let altura = prompt("Informe sua altura");
// altura = altura.replace(",",".");

// let peso = prompt("Informe seu peso");
// peso = peso.replace(",",".");

document.querySelector("#formulario").addEventListener("submit", (e) =>{
// document.querySelector("#btn").addEventListener("click", (e) =>{
    e.preventDefault(); // Impede o envio do formulário
    
    let altura = document.getElementById("id_altura").value;
    altura = parseFloat(altura.replace(",", "."));

    let peso = document.getElementById("id_peso").value;
    peso = Number(peso.replace(",", "."));

    let resultado = document.getElementById("resultado");

    let calculoImc = peso / (altura*altura);
    console.log(altura + "  " + peso + "  " + calculoImc);

    if (calculoImc <= 18.5){
        resultado.innerHTML = "MAGREZA";
    }else if(calculoImc > 18.5 && calculoImc <= 24.9){
        resultado.innerHTML = "NORMAL";
    }else if(calculoImc >= 25 && calculoImc <= 29.9){
        resultado.innerHTML = "SOBREPESO";
    }else if(calculoImc >= 30 && calculoImc <= 39.9){
        resultado.innerHTML = "OBESIDADE";
    }else if(calculoImc >= 40){
        resultado.innerHTML = "OBESIDADE GRAVE";
    }else{
        resultado.innerHTML = "ERRO";
    }


    //OPERADOR TERNÁRIO

    // resultado.innerHTML = 
    //     calculoImc <= 18.5 ? "MAGREZA" :
    //     calculoImc >= 18.5 && calculoImc <= 24.9 ? "NORMAL" :
    //     calculoImc >= 25 && calculoImc <= 29.9 ? "SOBREPESO" :
    //     calculoImc >= 30 && calculoImc <= 39.9 ? "OBESIDADE" :
    //     calculoImc >= 40 ? "OBESIDADE GRAVE" : "ERRO";
        


});


