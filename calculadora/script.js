// Seleção dos Elementos

const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector(".igual");
const botaoPonto = document.querySelector(".ponto");
const botaoNumeros =  document.querySelectorAll(".num");
const botaoOperador =  document.querySelectorAll(".operador")  


// Variaveis Globais

let operacaoActual = "";
let operador = null;
let valorAnterior = "";
let calculando = false;

// Funcões

function actualizarDisplay(){
    display.value = operacaoActual;
}

function insereNumero(evento){
    if(calculando){
        operacaoActual = evento.target.textContent;
        calculando = false;
    } else{
        operacaoActual += evento.target.textContent;
    }
    actualizarDisplay();
   }

   function inserePonto(){
    if(operacaoActual.indexOf(".") == -1){
        operacaoActual += ".";
        actualizarDisplay();
    }
   }
   
   function insereOperador(evento){
    if(operacaoActual !== ""){
        if(!calculando){
            if(operador !== null){
                calcule();
            }
            valorAnterior = operacaoActual;
            operacaoActual = "";
        }
        operador = evento.target.textContent;
    }
   }
   function calcule(){
    let resultado =  null;
    const operandoAnterior = parseFloat(valorAnterior);
    const operandoActual = parseFloat(operacaoActual);

    switch(operador){
        case "+":
            resultado = operandoAnterior + operacaoActual;
            break;
            
        case "-":
            resultado = operandoAnterior - operacaoActual;
            break;

        case "*":
            resultado = operandoAnterior * operacaoActual;
            break;

        case "/":
            resultado = operandoAnterior / operacaoActual;
            break;
    }
    operacaoActual = String(resultado);
    valorAnterior = operacaoActual;
    calculando = true;
    actualizarDisplay();

   }

   //Eventos
   botaoPonto.addEventListener("click", inserePonto);
   botaoNumeros.forEach((botao) => botao.addEventListener("click", insereNumero));
   botaoOperador.forEach((botao)=> botao.addEventListener
   ("click", insereOperador));
   botaoIgual.addEventListener("click",calcule);