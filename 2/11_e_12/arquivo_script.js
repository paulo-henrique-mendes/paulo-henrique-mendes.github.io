let $nome = "Paulo";
// console.log($nome);

let _idade = 30;
// console.log("Eu tenho " + _idade + " anos. Não sou velho, mas também não sou novo.");

let estudar = true;
let outroTipoBoleano = false;
// console.log("Rodrigo gosta de 'estudar'? " + estudar + " ou " + outroTipoBoleano);

const meuTime = "Fortaleza";
/*
meuTime = "Ceará";
*/

// String - Cadeia de caracteres
// "" - aspas duplas
// '' - aspas simples
// ` ` - crases - template literals ou template strings

//Concatenação
// console.log('"Seja bem-vindo"! Sou ' + meuTime + " até morrer!");

//Interpolação
// console.log(`Olá, meu nome é ${$nome}.
//     Tenho ${_idade} anos.
// `);

/* Observações: 
        undefined é algo que não está definido
        null é nulo - é um objeto que tem nada dentro dele
*/

const pessoa1 = {
    nome: "Adria", // String
    idade: 16, // Number
    casada: false, // boolean
    conjuge: null // nulo
}

const infor2 = ["Nick", "Adria", "Gabriel"];
// console.log(infor2[2]);

let pessoa2 = {
    nome: "Paulo",
    idade: 30,
    casada: true,
    conjuge: "Maria"
}

// Palavra reservada do Javascript para informar o tipo de dado
console.log(typeof pessoa1.nome);
console.log(typeof pessoa1.idade);
console.log(typeof pessoa1.casada);
console.log(typeof pessoa1.conjuge);

console.log(typeof var_nao_declarada);
console.log(typeof 100/"Rodrigo");








