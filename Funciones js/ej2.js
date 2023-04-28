 const cadena = prompt("Escriba algo");


document.write(chara(cadena));

function chara(chain){

if (chain === chain.toUpperCase()) {
    return "La cadena esta formada solo por mayusculas.";
  } else if (chain === chain.toLowerCase()) {
    return "La cadena esta formada sólo por minusculas.";
  } else {
    return "La cadena esta formada por una mezcla de mayusculas y minusculas.";
  }
}

