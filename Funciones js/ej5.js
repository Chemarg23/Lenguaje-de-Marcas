const numero = parseInt(prompt("Introduce un número del 1 al 10:"));


function translateNumber(numero) {
  let number;
  switch (numero) {
    case 1:
      number = "one";
      break;
    case 2:
      number = "two";
      break;
    case 3:
      number = "three";
      break;
    case 4:
      number = "four";
      break;
    case 5:
      number = "five";
      break;
    case 6:
      number = "six";
      break;
    case 7:
      number = "seven";
      break;
    case 8:
      number = "eight";
      break;
    case 9:
      number = "nine";
      break;
    case 10:
      number = "ten";
      break;
    default:
      number = "Error: el número debe estar entre 1 y 10";
      break;
  }
  return number;
}

document.write(translateNumber(numero))
