// document.querySelector("#botao") 
// // Outra opção: Capturando a referência do botão
//     .addEventListener("click", (e)=>{ 
// // Adicionando o evento de click no botão.
document.getElementById("formulario")
    .addEventListener("submit", (e)=>{
        e.preventDefault(); 
        // Impede o envio do formulário - Evitar o carregamento do form

        let nome = document.querySelector("#id_nome").value;
        let resultado = document.querySelector("#resultado");
        
        let altura = document.getElementById("id_altura").value;
        altura = parseFloat(altura.replace(",", "."));
    
        let peso = document.getElementById("id_peso").value;
        peso = parseFloat(peso.replace(",", "."));
    
        let calculoImc = peso / (altura ** 2);

        resultado.innerHTML = `<br>
            Olá, <strong>${nome}</strong>! 
            <br> Seu IMC é <strong>${calculoImc.toFixed(1)}</strong>
            e <br> sua classificação é: `;
    
        // OPERADOR TERNÁRIO
        resultado.innerHTML += 
            calculoImc < 18.5 ? "Abaixo do peso normal" :
            calculoImc >= 18.5 && calculoImc <= 24.9 ? "Peso normal" :
            calculoImc > 24.9 && calculoImc <= 29.9 ? "Excesso de peso" :
            calculoImc > 29.9 && calculoImc <= 34.9 ? "Obesidade classe I" :
            calculoImc > 34.9 && calculoImc <= 39.9 ? "Obesidade classe II" :
            calculoImc > 39.9 ? "Obesidade classe III" : "ERRO";

        // if (calculoImc < 18.5){
        //     resultado.innerHTML += "Abaixo do peso normal";
        // }else if(calculoImc >= 18.5 && calculoImc <= 24.9){
        //     resultado.innerHTML += "Peso normal";
        // }else if(calculoImc > 24.9 && calculoImc <= 29.9){
        //     resultado.innerHTML += "Excesso de peso";
        // }else if(calculoImc > 29.9 && calculoImc <= 34.9){
        //     resultado.innerHTML += "Obesidade classe I";
        // }else if(calculoImc > 34.9 && calculoImc <= 39.9){
        //     resultado.innerHTML += "Obesidade classe II";
        // }else if(calculoImc > 39.9){
        //     resultado.innerHTML += "Obesidade classe III";
        // }else{
        //     resultado.innerHTML += "ERRO";
        // }
            
})

let limpar_nome = ()=>{
    let nome = document.querySelector("#id_nome");
    nome.value = ""
    
}