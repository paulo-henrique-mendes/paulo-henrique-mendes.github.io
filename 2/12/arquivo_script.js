/* Operadores de Comparação no JavaScript
Operador | Significado
---------+----------------------
    <    | Menor que
---------+----------------------
    >    | Maior que 
---------+----------------------
   <=    | Menor ou igual que
---------+----------------------
   >=    | Maior ou igual que
---------+----------------------
   ==    | Igual ao (compara valor)
---------+----------------------
   !=    | Diferente de

   ===  | Estritamente igual (compara tipo e valor)
*/

let idade = "10";
if(idade === 10){
    console.log("Entrou na condição");
}else{
    console.log("Não entrou na condição"); // <-
}

//Comentário em linha
/* Comentário em bloco 
Observações:
    - Let funciona apenas no escopo situado
    - LET (muda de valor)
    - CONST - Valor não muda por ser constante, 
        se não gerará o erro
        "Atribuição a variável constante".
*/

// Exemplo de escopos
// let nome = "Adria";
{
    let nome = "Nick";
    console.log(nome)
}
// console.log(nome)


