function ordemInversa(palavra) {
  var palavraInvertida = "";
  for (var i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida = palavraInvertida + palavra[i];
  }
  return palavraInvertida;
}

console.log(ordemInversa("top"));
