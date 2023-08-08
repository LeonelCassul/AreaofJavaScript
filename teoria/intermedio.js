// Manipulação de Arrays

const  fruta = ["Maçã","Laranja"];
// unshift() serve para adicionar valor no final do array
fruta.unshift("Acerola");
console.log(fruta);
// shift() serve para eliminar o primeiro
fruta.shift()
console.log(fruta)

// map. filter, reduce -> arrow function

const numeros =  [1, 2, 3, 4, 5];
const numeroPar = numeros.find((num) => console.log(num));
const numeroPares = numeros.find((num) =>  num % 2 === 0);
console.log(numeroPares);
const numeroPare = numeros.filter((num)=> num % 2 === 0);
console.log(numeroPare);

// Manipulação de Strings

const frase = "Olá, mundo";

const palavras = frase.trim().split(" ");
console.log(frase);
console.log(palavras);
const frase_2 =  "javascript é incrível!";

console.log(frase_2.startsWith("java"));
console.log(frase_2.endsWith("!"));

// Exceções e tratamentos de erros

const idade = 15;
if(idade < 18){
    //throw new error("Voce não tem 18 anos");
}

try {
    const number = 666;
        if(number == 667)
            throw new Error("Este não é o número da besta!");
} catch (error) {
    console.log(error.message);
    
}

// Callback: é uma função que vai ser excutada por outra função

function cumprimentar(nome, Callback){
    console.log("Olá, " +nome);
    Callback();
}
 
function mostrarSaudacao(){
    console.log("Como voce está?");
}
cumprimentar("Leonel", mostrarSaudacao);

// Settimeout => Depois de um tempo executa algo, uma vez

function mostrarMensagem(){
    console.log("Essa mensagem será exibida apos 3 seg");
}
//setTimeout(mostrarMensagem, 3000);

// Promises
const promessa  =  new Promise(
    (resolve, reject) =>{
        const condicao =  true;

        if(condicao){
            resolve(" A condição +e verdadeira");
        }else{
            reject("A condição é falsa");
        }
    }
);
promessa
.then((mensagem)=> {
    console.log(mensagem);
})
.catch((erro)=>{
    console.log(erro);
});

// Async Await

async function obterValor(){
 console.log("Muitas formas de funções");
}

//  JSON (JavaScript Object Notation)
//{nome: "teste"} =>{ "nome": "teste"}
// Padroniza a comunicação
// front-end e back end em uma só linguagem.

const objecto = {nome:"Leonel", idade: 28};
const jsonString = JSON.stringify(objecto);

console.log(jsonString);
console.log( typeof jsonString);