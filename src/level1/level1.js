
// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

export function devolverString(str) {
  // Tu código:
  
  return str.toString();  
}

export function suma(x1, x2) {
 // Tu código:
 return x1 +x2;
}

export function resta(x1, x2) {
 // Tu código:
 return x1 - x2;

}

export function multiplica(x1, x2) {
  // Tu código:
  return x1 * x2;

}

export function divide(x1, x2) { 
  // Tu código:

  return x1 / x2;
}

export function sonIguales(x1, x2) {  
  // Tu código:

  return x1 === x2;  
}

export function tienenMismaLongitud( str1, str2) {  
  // Tu código:

  if ((str1.length)===(str2.length)){
    return true
  } else {
    return false
  }
}

export function menosQueNoventa(num) {  
  // Tu código:
  if (num<90){
    return true
  } else {
    return false
  }
}

export function mayorQueCincuenta(num) {  
  // Tu código:
  if (num>50){
    return true
  } else {
    return false
  }
}

export function obtenerResto(x , y) {  
  // Tu código:

  return x % y;
}

export function esPar(num) {
  // Tu código:
  if (num % 2 === 0){
  return true
  } else {
    return false
  }
}

export function esImpar(num) {  
  // Tu código:
  if (num % 2 !== 0){
    return true
    } else {
      return false
    }
  }

export function elevarAlCuadrado(num) {  
  // Tu código:

  return num ** 2;
}

export function elevarAlCubo(num) { 
  // Tu código:

  return num ** 3;
}

export function elevar(num, exponent ) {  
  // Tu código:

  return num ** exponent;
}

export function redondearNumero(num) {  
  // Tu código:
  const redondearNumero = Math.round(num)
  return redondearNumero;
}

export function redondearHaciaArriba(num) { 
  // Tu código:
  const redondearHaciaArriba = Math.ceil(num)
  return redondearHaciaArriba;
}

export function numeroRandom(num) {  
  // Tu código: (falta test de este)
  const numeroRandom = Math.random(num)
  return numeroRandom;
}

export function esPositivo(num) {
  // Tu código:
  if (num>0){
    return "Es positivo"
  } else if (num===0) {
    return false
  }else{
    return "Es negativo"
  }
}

export function agregarSimboloExclamacion(str) {  
  // Tu código:
  let agregarSimboloExclamacion= str
  agregarSimboloExclamacion +="!"
  return agregarSimboloExclamacion;
}

export function combinarNombres(nombre, apellido) {
  // Tu código:
  
  return nombre + ' ' + apellido
}

export function obtenerSaludo(nombre) {
  // Tu código:

  return "Hola " + nombre + "!"
}

export function obtenerAreaRectangulo(alto, ancho) {  
  // Tu código:
  const area = alto * ancho
  return area;
}


export function retornarPerimetro(lado){
  // Tu código:
  const perimetro = lado * 4
  return perimetro;
}


export function areaDelTriangulo(base, altura){
  // Tu código:
  const area = (base * altura )/2
  return area;
}


export function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:
  const dolar = euro*1.20
  return dolar;
}


export function esVocal(letra){
  // Tu código:
  const vocals = ['a','e','i','o','u']
  if(letra.length!==1){
    return "Dato incorrecto"
  } else if (vocals.includes(letra)){
    return "Es vocal"
  } else{
    return "Dato incorrecto"
  }
  
}
