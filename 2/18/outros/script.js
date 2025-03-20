// function verificar() {

// }

// let verificar = function(){

// }

const verificar = () =>{
    let numero = Number(window.document.querySelector("#id_numero").value);
    let resultado = document.getElementById("id_resultado");
    
    if((numero%2) == 1){
        resultado.innerHTML = "O número digitado é ímpar";
    }else if(numero%2 == 0){
        resultado.innerHTML = "O número digitado é par";
    }
}