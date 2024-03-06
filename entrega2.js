/* primero */
const paises = ["Argentina", "Brasil", "Chile", "México", "España"];

const nuevosPaises = ["Italia", "Francia"];
const paisesConcatenados = paises.concat(nuevosPaises);
console.log("Países concatenados:", paisesConcatenados);
const nuevoPais = "Alemania";
paises.unshift(nuevoPais);
console.log("País agregado al inicio:", paises);



/* segundo */

const colores = ["Rojo", "Verde", "Azul", ["Amarillo", "Blanco"], "Negro"];

const todosCadenas = colores.every(color => typeof color === 'string');
console.log("¿Todos son cadenas?", todosCadenas ? "Sí" : "No");
const coloresAplanados = colores.flat();
console.log("Colores aplanados:", coloresAplanados);



/* tercero */

const frutas = ["Manzana", "Plátano", "Naranja", "Uva", "Pera"];

const frutasConcatenadas = frutas.join(", ");
console.log("Frutas concatenadas:", frutasConcatenadas);
const frutaConN = frutas.find(fruta => fruta.startsWith('N'));
console.log("Primera fruta que comienza con 'N':", frutaConN);



/* cuarto */
const telefonos = ["123456789", "987654321", "555555555", "666666666", "999999999"];

console.log("¿Incluye '555555555'?", telefonos.includes("555555555"));
const telefonoConSeis = telefonos.find(telefono => telefono.includes("6"));
console.log("Teléfono que incluye '6':", telefonoConSeis);

const telefonosConPrefijo = telefonos.map(telefono => "+1" + telefono);
console.log("Teléfonos con prefijo:", telefonosConPrefijo);

/* quinto */

const ciudades = ["Nueva York", "Tokio", "Londres", "París", "Roma"];


console.log("Ciudades:");
ciudades.forEach(ciudad => console.log(ciudad));
console.log("Índice de 'Londres':", ciudades.findIndex(ciudad => ciudad === "Londres"));
const ciudadesEnMinusculas = ciudades.map(ciudad => ciudad.toLowerCase());
console.log("Ciudades en minúsculas:", ciudadesEnMinusculas);

/* sexto */


const notas = [9, 7, 8, 6, 10];

const notasOrdenadas = notas.slice().sort((a, b) => a - b);
console.log("Notas ordenadas:", notasOrdenadas);
const promedio = notas.reduce((total, nota) => total + nota) / notas.length;
console.log("Promedio de notas:", promedio);
const notasDobles = notas.map(nota => nota * 2);
console.log("Notas duplicadas:", notasDobles);
