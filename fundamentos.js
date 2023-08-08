// Introdução as Váriaveis
// Sintaxe: var identificador = "valor";
var minhaVariavel = "Olá, Mundo";

console.log(minhaVariavel);
console.log(typeof minhaVariavel);

// let e const :  são as formas que a linguagem usapara a declaração das váriaveis.

let x =  10;
const y = 5;

console.log(x)
console.log(y);

// Operadores Aritmético

console.log("Operadores Aritmetricos");
console.log("Opreção com ", x," e",y)

console.log("Soma ou Adição: ", x + y);
console.log("Subtração: ", x - y);
console.log("Multiplicação: ", x * y);
console.log(" Divisão: ", x / y);

// Operadores de Comparação

console.log(x == y);
console.log(x === y);
console.log(x!=y);
console.log(x !== y);

// Operadores Lógicos
// Porta AND &&
// Porta OR ||

console.log(20 > 5 && 10 > 5);
console.log(20 < 5 && 10 > 5);
console.log(4 == 4 || 5 > 10);
console.log(1994 < 2023 || (2023 - 1994) > 27);

// Conversão de Tipo

const  meuNumero = "123";
const meuNumeroConvertido = Number(meuNumero);
console.log(meuNumero);
console.log(meuNumeroConvertido);

// Estrutura de Condição - if, else, else if

const idade = 20;

if(idade > 13){
    console.log("A pessoa ainda é criança");
}else if(idade == 13){
 console.log("A pessoa ainad é adolescente");   
} else{
    console.log("A pessoa é adulta");
}

// Switch
const fruta = "Pecigo";
switch(fruta){
    case "Banana":
        console.log("A fruta é Banana");
        break;
    case "Maçã":
        console.log("A fruta é Maçã");
        break;
        default:
            console.log("Nenhuma das opções anterior");
}

// Estrutura de Repetição
// for, while e do while
for(let i = 0; i < 10; i++){
    console.log("Contou: " ,i);
}

let i = 0;
while (i < 5) {
    console.log("Ainda é verdade");
    i++;
}

// do while

let j = 0;
do{
    console.log("O valor de j é: " + j);
    j++
    } while(j < 5);

    // funções
    // Sintaxe: function nameFunction ( arg1, arg2){ bodyfunction }

     function hello() {
        console.log("Hello, World.")
        
     }
     
     function World(nome) {
        
        console.log("Hello, World. " + nome)
        
     }
          // Invocação da Função
    World("Leonel");
     hello();

     // Escopo das Variáveis
     // Uma váriavel pode ser de escopo global ou local. 
     // hoisting = içamento

     testeHoisting()
     function testeHoisting() {
        console.log("Deu certo!");
     }
     // Arrow function
     const testeArrow = () => console.log("Isso também é uma função.");
     testeArrow();

     // Array ou listas

     const numero = [1, 2, 3, 4, 5];
     console.log(numero);
     console.log(numero[3]);
     numero.push(6);
     console.log(numero);
     
     // Prototype = > OBJECTO -> objecto2
     // Array => nossos arrays
     numero.pop()
     console.log(numero);


     // String
     // interpolação
     
     const nome = "Leonel";
     const minhaVida = `${nome} Como estás?`;
     console.log(minhaVida);