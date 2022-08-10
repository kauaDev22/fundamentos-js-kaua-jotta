function verficaNumeroPrimo(numero) {
  for (var i = 0; i < numero; i++) {
    if (numero % 2 == 0) {
      console.log(numero + " não é primo");
    } else if (numero % 2 >= 1) {
      console.log(numero + " é primo");
    }
  }
}

console.log(verficaNumeroPrimo(11));
