function calculo(operacao, num1, num2) {
  var resultado;
  if (operacao === "SOMA") {
    resultado = num1 + num2;
  } else if (operacao === "SUBTRACAO") {
    resultado = num1 - num2;
  } else if (operacao === "MULTIPLICAO") {
    resultado = num1 * num2;
  } else if (operacao === "DIVISAO") {
    resultado = num1 / num2;
  } else if (operacao === "RESTO") {
    resultado = num1 % num2;
  } else if (operacao === "PORCENTAGEM") {
    resultado = (num1 * num2) / 100;
  } else if (operacao === "POTENCIA") {
    resultado = num1 ** num2;
  } else {
    console.log("operacao invalida meu capucha");
  }

  return resultado;
}

console.log(calculo("SOMA", 1, 1));
