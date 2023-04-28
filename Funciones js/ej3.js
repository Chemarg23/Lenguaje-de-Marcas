 const cadena = prompt("Escriba algo: ");


document.write(esPalindromo(cadena));

function esPalindromo(texto) {
    texto = texto.toLowerCase().replace(/\s/g, '');
    return texto === texto.split('').reverse().join('');
  }


