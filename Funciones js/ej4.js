const num1 = prompt("Introduce el primer numero:");
const num2 = prompt("Introduce el segundo numero:");
const num3 = prompt("Introduce el tercer numero:");


const menorNumero = calcularMenorNumero(Number(num1), Number(num2), Number(num3));

document.write(`El numero menor es ${menorNumero}`)


function calcularMenorNumero(num1, num2, num3) {
  return Math.min(num1, num2, num3);}