// No cambies los nombres de las funciones.

export function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Tu código:
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

export function mayoriaDeEdad(edad) {
  // Tu código:

  return edad >= 18 ? "Allowed" : "Not allowed";
}

export function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  // Tu código:
  if (status === 1) {
    return "Online";
  } else if (status === 2) {
    return "Away";
  } else {
    return "Offline";
  }
}

export function saludo(idioma) {
  // Tu código:
  if (idioma === "aleman") {
    return "Guten Tag!";
  } else if (idioma === "ingles") {
    return "Hello!";
  } else if (idioma === "mandarin") {
    return "Ni Hao!";
  } else {
    return "Hola!";
  }
}

export function colors(color) {
  //Usar el statement Switch.
  // Tu código:
  if (color === "blue") {
    return `This is ${color}`;
  } else if (color === "red") {
    return `This is ${color}`;
  } else if (color === "green") {
    return `This is ${color}`;
  } else if (color === "orange") {
    return `This is ${color}`;
  } else {
    return "Color not found";
  }
}

export function esDiezOCinco(numero) {
  if (numero === 10) {
    return true;
  } else if (numero === 5) {
    return true;
  } else {
    return false;
  }
}

export function estaEnRango(numero) {
  // Tu código:
  if (numero > 20 && numero < 50) {
    return true;
  } else {
    return false;
  }
}

export function esEntero(numero) {
  // Tu código:
  const num = numero % 1 === 0 ? true : false;
  return num;
}

export function fizzBuzz(numero) {
  // Tu código:
  if (numero % 15 === 0) {
    return "fizzbuzz";
  } else if (numero % 5 === 0) {
    return "buzz";
  } else if (numero % 3 === 0) {
    return "fizz";
  } else {
    return numero;
  }
}

export function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  // Tu código:
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  } else if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  } else if (num1 > num2 && num1 > num3) {
    return "Número 1 es mayor y positivo";
  } else if (num3 > num1 && num3 > num2) {
    return num3 + 1;
  } else {
    return false;
  }
}

export function esPrimo(num) {
  /// Tu código:
  if(num===0 || num === 1){
    return false;
  }else if (num === 2) {
    return true;
  } else {
    for (let x = 2; x < num; x++) {
      if (num % x === 0) {
        return false;
      }
    }
    return true;
  }
}

export function esVerdadero(valor) {
  // Tu código:
  if(valor===false){
    return "Soy falso"
  }else{
    return "Soy verdadero"
  }
}

export function tablaDelSeis() {
  // Tu código:
  let tabla = [];
    for(let i = 0; i <= 10; i++){
      tabla.push(6 * i);
    }
    return tabla;
}

export function tieneTresDigitos(numero) {
  // Tu código:
  if(numero<100 || numero >999){
    return false
  }else{
    return true
  }
}

export function doWhile(numero) {
  //Usar el bucle do ... while.
  let times = 0;
  do {
     numero += 5
     times += 1
  } while (times<8);

  return numero;
}
