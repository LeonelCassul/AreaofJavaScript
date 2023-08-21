/* 
Factorial Sum

Read two numbers M and N indefinitely.
Calculate and write the sum of their factorial.
Be carefull, because the result can have more than 15 digits.

Input
The input file contains many test cases.
Each test case contains two integer numbers M (0 ≤ M ≤ 20) and N (0 ≤ N ≤ 20). 
The end of file is determined by eof.

Output
For each test case in the input your program 
must print a single line, containing a number 
that is the sum of the both factorial (M and N).
*/

// Declaração das Variaveis 

let n = parseInt(prompt("Informe o primeiro número: "));
let m = parseInt(prompt("Informe o segundo número"));

// Processamento

if((n >= 0 && n <= 20) && (m >= 0 && m <= 20)){
        console.log("Soma de vfatorial");
        for (let index = 0; index < n; index++) {
               console.log("Testando ..2,3,4");
                
        }
}