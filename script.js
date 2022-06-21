const nome = ["martina", "luca", "eleonora", "pippo", "pluto"];
const newArray = nome.map(
	(element, index, array) => index + "-" + element);
console.log(newArray);

const indexReverse = nome.map(
  (element, index, array) => array.length - 1 - index
);
console.log(indexReverse);

const nomiReverse = nome.map(
  (element, index, array) => nome[array.length - 1 - index]
);
console.log(nomiReverse);
 