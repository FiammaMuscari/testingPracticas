// No cambies los nombres de las funciones.

export function devolverPrimerElemento(array) {
  // Tu código:

  return array[0];
}

export function devolverUltimoElemento(array) {
  // Tu código:

  return array[array.length - 1];
}

export function obtenerLargoDelArray(array) {
  // Tu código:

  return array.length;
}

export function incrementarPorUno(array) {
  // Tu código:

  return array.map((val) => val + 1);
}

export function agregarItemAlFinalDelArray(array, elemento) {
  // Tu código:
  array[array.length] = elemento;
  return array;
}

export function agregarItemAlComienzoDelArray(array, elemento) {
  /// Tu código:
  array.unshift(elemento);
  return array;
}

export function dePalabrasAFrase(palabras) {
  // Tu código:

  return palabras.join(" ");
}

export function arrayContiene(array, elemento) {
  // Tu código:

  for (var i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }
  }
  return false;
}

export function agregarNumeros(numeros) {
  // Tu código:
  let suma = 0;

  for (const valor of numeros) {
    suma += valor;
  }
  return suma;
}

export function promedioResultadosTest(resultadosTest) {
  // Tu código:
  const suma = resultadosTest.reduce((x, y) => x + y);
  const promedio = suma / resultadosTest.length;
  return promedio;
}

export function numeroMasGrande(numeros) {
  // Tu código:
  const grande = numeros.sort((x, y) => x - y)[numeros.length - 1];
  return grande;
}

export function multiplicarArgumentos() {
  // Tu código:
  //no habia test.
}

export function cuentoElementos(arreglo) {
  // Tu código:
  let counter = 0;
  for (let i = 18; i >= 0; i--) {
    if (arreglo[i] > 18) {
      counter++;
    }
  }
  return counter;
}

export function diaDeLaSemana(numeroDeDia) {
  // Tu código:
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  } else if (numeroDeDia > 1 && numeroDeDia < 7) {
    return "Es dia Laboral";
  }
}

export function empiezaConNueve(n) {
  // Tu código:
  let numero = parseInt(n.toString().charAt(0));
  if (numero === 9) return true;
  else {
    return false;
  }
}

export function todosIguales(arreglo) {
  // Tu código:
  if (typeof arreglo) {
    let primerElemento = arreglo[0];
    return arreglo.every(function (elemento) {
      return elemento === primerElemento;
    });
  }
}

export function mesesDelAño(array) {
  // Tu código:
  let meses = [];
  for (var i = 0; i < array.length; i++) {
    if (
      array[i] === "Marzo" ||
      array[i] === "Noviembre" ||
      array[i] === "Enero"
    ) {
      meses.push(array[i]);
    }
  }
  if (
    meses.includes("Marzo") &&
    meses.includes("Noviembre") &&
    meses.includes("Enero")
  ) {
    return meses;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

export function mayorACien(array) {
  // Tu código:
  let mayor = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      mayor.push(array[i]);
    }
  }
  return mayor;
}

export function breakStatement(numero) {
  // Tu código:
  let i = 0;
  const array = [];

  do {
    i++;
    numero += 2;
    if (numero === i) {
      break;
    } else {
      array.push(numero);
    }
  } while (i < 10); //devolver 10 numeros en el array
  if (array.length === 10) {
    return array;
  }
  return "Se interrumpió la ejecución";
}

export function continueStatement(numero) {
  // Tu código:

  const array = [];
  let sumar = numero
  for(let i=0; i<10; i++){
  if(i===5){
    continue; //evita el 5
  }else{
    sumar=sumar + 2
    array.push(sumar);
  }
}
return array;
}
