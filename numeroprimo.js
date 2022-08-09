function verificaNumeroPrimo(numero) {
  for (var i = 0; i <= numero; i++) {
    if (numero % i === 0);
    if (numero == 2) {
      console.log("o numero" + numero + "é primo");
    } else {
      console.log("o numero" + numero + "não é primo");
    }
  }

  return numero;
}

verificaNumeroPrimo(13);
