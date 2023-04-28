 const numero = prompt("Escriba su numero");

function pares(num){
    if(num %2 ===0){
        return "Par";
    }
    return "Impar"
}

document.write(pares(numero));