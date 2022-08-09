var carros = ["Gol", "Jetta", "320i", "m3 e36"];
var carro1 = carros[0];
var carro2 = carros[1];
var carro3 = carros[2];
var carro4 = carros[3];


console.log("carro primeira posição:" + carro1);
console.log("carro segunda posição:" + carro2);
console.log("carro terceira posição:" + carro3);
console.log("carro quarta posição:" + carro4);

carros[2] = "m4";
console.log(carros[2]);

console.log("tamanho do array:" + carros.length);
console.log("ultimo elemento do array:" + carros[carros.length - 1]);

carros[3] = "ferrari 488"

console.log("ultimo elemento do array:" + carros[carros.length - 1]);

carros[carros.length] = "civic coupé";
console.log("ultimo elemento do array:" + carros[carros.length - 1]);

carros.push("opala")

console.log(carros)

console.log(carros.pop())

carros.unshift("corvete");
console.log(carros)

carros.shift();
console.log(carros)