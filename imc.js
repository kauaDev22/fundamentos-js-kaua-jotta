function imc(peso, altura) {
  var imc = peso / (altura * altura);

  if (imc < 18.5) {
    console.log("você esta abaixo do peso");
  } else if (imc >= 18.5 && imc < 25) {
    console.log("você esta no peso ideal");
  } else if (imc >= 25 && imc < 30) {
    console.log("sobre peso");
  } else if (imc >= 30 && imc < 35) {
    console.log("obesidade grau I");
  } else if (imc >= 35 && imc < 40) {
    console.log("obesidade grau II");
  } else {
    console.log("obesidade grau III");
  }

  return imc.toFixed(2);
}

console.log(imc(70, 1.5));
