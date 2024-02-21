//5 let 5 const
let nombre = "Felipe";
let apellido = "Gonzalez";
let edad = 18;
let altura = 1.75;
let esEstudiante = true;
const PI = 3.1416;
const IVA = 0.19;
const gravedad = 9.8;
const nombreCompleto = nombre + " " + apellido;
const e = 2.71;


//operador ternario
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

//metodos del lenguaje
let texto = "Hola mundo";
console.log(texto.length);
console.log(texto.includes("mundo"));
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
co

//funciones
const suma = (a, b) => {
    return a + b;
}

const potencia = (a, b) => {
    return Math.pow(a, b);
}

const raiz = (a) => {
    return Math.sqrt(a);
}

const redondear = (a) => {
    return Math.round(a);
}

const random = () => {
    return Math.random();
}

const max = (a, b) => {
    return Math.max(a, b);
}

const min = (a, b) => {
    return Math.min(a, b);
}

//sin parametro
const saludar = () => {
    return "Hola";
}

//un parametro
const saludar2 = (nombre) => {
    return "Hola " + nombre;
}

//integrar con llamados a funciones y mostrar resultados
console.log(suma(5, 3));
console.log(potencia(2, 3));
console.log(raiz(9));
console.log(redondear(5.6));
console.log(random());
console.log(max(5, 3));
console.log(min(5, 3));
console.log(saludar());
console.log(saludar2("Felipe"));