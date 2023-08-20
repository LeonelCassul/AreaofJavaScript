/*
               PROBLEM 

Read the four values corresponding to the x and y axes of 
two points in the plane, p1 (x1, y1) and p2 (x2, y2) and calculate
 the distance between them, showing four decimal places 
 after the comma., according to the formula:

Input
The input file contains two lines of data. 
The first one contains two double values: x1 y1 and the second one also contains
 two double values with one digit after the decimal point: x2 y2.

Output
Calculate and print the distance value using the 
provided formula, with 4 digits after the decimal point.

*/

// Declação  das variaveis

        // Cordenada do  P1
        let x1 = Number(prompt("Informe o valor de x1:"));
        let y1 = Number(prompt("Informe o valor de y1:"));

        // Coordenada do P2
        let x2 = Number(prompt("Informe o valor de x2:"));
        let y2 = Number(prompt("Informe o valor de y2:"));

        // Operaçao

        let distancia = Math.sqrt( Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));
        let casaDecimal = parseFloat(distancia.toFixed(4));

        // Saída 
      
        console.log(casaDecimal);

