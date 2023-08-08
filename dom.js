// Selcionar Elemesntos

const elementoPorId = document.getElementById("meuId");
console.log(elementoPorId);
const elementoPorId2 = document.querySelector("#meuId");
console.log(elementoPorId2);

// Manipular conteudo de Texto

const element =  document.querySelector("#meuId");
console.log(element.textContent);
setTimeout( ()=>{
element.textContent =  " Vou mudar de Conteúdo dentro de 3 seg"
}, 1000
);

// Trabalhando com Atributos
const link = document.querySelector("a");

console.log(link);

link.setAttribute("href", "https://horadecodar.com.br/cursos");

console.log(link.getAttribute("href"));

console.log(link.hasAttribute("target"));

link.removeAttribute("target");

// Manipulação de Classes do CSS

element.classList.add("novaClasse");
element.classList.remove("novaClasse");
element.classList.toggle("outraclasse");

// Manipular o CSS

 const elemento3 = document.querySelector("meuId");
 //elemento3.style.color = "blue";
 //elemento3.style.backgroundColor = "red";


 // Navegação entre Nós
   const element4 = document.querySelector("meuInput");

   const pai = element4.parentNode;
   console.log(pai);

   // Obter o primeiro  filho

   const primeiroFilho = pai.firstChild;
   console.log(primeiroFilho);

   const ultimoFilho = pai.lastChild;
   console.log(ultimoFilho);

    // Manipulação de Estrutura do DOM

    const novoElemento = document.createElement("div");
    console.log(novoElemento);
    novoElemento.textContent = "Minha div de JavaScript"
    console.log(novoElemento);

    document.body.appendChild(novoElemento);
    document.body.insertBefore(novoElemento,pai);
    document.body.removeChild(elementoPorId);

    // EVENTOS
        //click
        const botao = document.querySelector("button");

        botao.addEventListener("click", function(){
            console.log("Botão Clicado");
        });

        // mouse
        const element5 = document.querySelector("#meuFormulario");

        element5.addEventListener("mouseover", function(){
            console.log("O mouse passou aqui!");
        });

        // teclado
         const campoInput =  document.querySelector("#meuInput");

         campoInput.addEventListener("keydown", function(){
            console.log("Tecla Pressionada");
         });

         // Formulario
         const form = document.querySelector("form");
         form.addEventListener("submit", function(event){
            event.preventDefault();
            console.log("Form enviado");
         });

         // propogação de eventos

         document.querySelector("#elementoPai").addEventListener(
            "click", function(){
                console.log("Clique capturado no pai");
            }
         )

         document.querySelector("#elementoFilho")
         .addEventListener("click", function(event){
            event.stopPropagation();

            console.log(" Elemento Filho");
        });
        
        document.querySelector("#meuLink")
        .addEventListener("click", function(event){
            event.preventDefault();

            console.log("Clicou no Link");
         });

         // Delegação de Eventos

         document
         .querySelector("#elementoPai")
         .addEventListener("click",function(event){
            if(event.target.matches(".classDosFilhos")){
                console.log("Evento delegado para o filho")
            }
         });