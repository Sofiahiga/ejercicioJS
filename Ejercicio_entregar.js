var letras = "abcdefghijklmnñopqrstuvwxyz";

function tiene_letras(texto) {
    for(i=0; i<texto.length; i++){
        if (letras.indexOf(texto.charAt(i))!=-1){
            return(true);
        }
    }
    return(false);

}

//Operaciones básicas, Tipos de datos, Prompt y Alert

/*Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma.*/

/*let num_uno =prompt("Ingrese un número");

while (tiene_letras(num_uno)) {
    num_uno= prompt("ERROR, solo debe ingresar números");
}
let num_dos = prompt("Ingrese otro número");

while (tiene_letras(num_dos)) {
    num_dos= prompt("ERROR, solo debe ingresar números");
}

alert(num_uno + num_dos);*/

/* Crear un programa donde el usuario ingrese en un prompt la temperatura en Celsius y el programa muestre en una alerta la temperatura en Fahrenheit.*/

/*let celsius=parseFloat(prompt("Ingrese una temperatura en °C"))
let fahrenheit= celsius*1.8 + 32;

alert("La temperatura en Fahrenheit es " + fahrenheit + "°F" )*/

/* Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5 */

/*let numero=prompt("Ingrese un número");
while (tiene_letras(numero)) {
    numero= prompt("ERROR, solo debe ingresar números");
}
let resultado=numero/10;

alert(resultado);*/

/* Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a. */

/*let a = [1,2,3];
alert(typeof a);*/

//If and else

/* Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta. */

/*let numero=prompt("Ingrese un numero");
while (tiene_letras(numero)) {
    numero= prompt("ERROR, solo debe ingresar números");
}

if (numero%2 == 0) {
    alert(numero + " es un numero par");
} else {
    alert(numero + " es un numero impar");
}*/

/* Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log */

/*let numero=prompt("Ingrese un número");
while (tiene_letras(numero)) {
    numero= prompt("ERROR, solo debe ingresar números");
}

if (numero%5 == 0) {
    console.log(numero + " es divisible por 5. El resultado es " + numero/5)
} else {
    console.log(numero + " NO es divisible por 5");
}*/

/* Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log */

/*let numero=prompt("Ingrese un número");
while (tiene_letras(numero)) {
    numero= prompt("ERROR, solo debe ingresar números");
}

if (numero%5 == 0 && numero%11==0) {
    console.log(numero + " es divisible por 5 y 11. " + numero + "dividido 5 es " + numero/5 ". Y " + numero" dividido 11 es " + numero/11)
} else {
    console.log(numero + " NO es divisible por 5 y 11")
}*/

/* Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor. */

/*let num_uno = prompt("Ingrese un numero");
while (tiene_letras(num_uno)) {
    num_uno= prompt("ERROR, solo debe ingresar números");
}

let num_dos = parseInt(prompt("Ingrese otro numero"));

while (tiene_letras(num_dos)) {
    num_dos= prompt("ERROR, solo debe ingresar números");
}

if (num_uno>num_dos) {
    alert(num_uno + " es mayor");
} else {
    alert(num_dos + " es mayor");
}*/

/* Crear un programa que le pida al usuario primero un números al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario. */

/*let num_uno = prompt("Ingrese un numero");
while (tiene_letras(num_uno)) {
    num_uno= prompt("ERROR, solo debe ingresar números");
}
let num_dos = parseInt(prompt("Ingrese otro numero"));
while (tiene_letras(num_dos) {
    num_dos= prompt("ERROR, solo debe ingresar números");
}

alert(num_uno > num_dos ? num_uno + " es mayor" : num_dos + " es mayor");*/


/* Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.*/
//TENGO DUDA EN ESTE EJERCICIO
/*let texto = prompt("Ingrese un texto");
let primer_caracter= texto.charAt(0);

if (isNaN(primer_caracter)) {
    alert("texto comienza con una letra");
} else {
    alert("El texto comienza con un número");
}*/



/* Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no. */
//TENGO DUDA CON ESTE EJERCICIO

/*let ang_uno= parseFloat(prompt("Ingrese ángulo interno 1"));
while(ang_uno <= 0) {
    ang_uno= parseFloat(prompt("Error, ingrese un valor mayor a 0"));
}
let ang_dos= parseFloat(prompt("Ingrese ángulo interno 2"));
while(ang_dos <= 0) {
    ang_dos= parseFloat(prompt("Error, ingrese un valor mayor a 0"));
}
let ang_tres= parseFloat(prompt("Ingrese ángulo interno 3"));
while(ang_tres <= 0) {
    ang_tres= parseFloat(prompt("Error, ingrese un valor mayor a 0"));
}

alert(ang_uno + ang_dos + ang_tres == 180 ? "El triángulo es válido." : "El trángulo no es válido");*/

/*Determinar si una palabra empieza con mayúscula o no.*/

/*let palabra = prompt("ingrese palabra");
let primer_caracter=palabra.charAt(0);

console.log(primer_caracter === primer_caracter.toUpperCase() ? "Empieza con mayúscula" : "Empieza con minúscula");*/

/* Determinar si un año dado es bisiesto. */

/*function es_bisiesto(anio) {
        return new Date(anio, 2, 0).getDate();
}

let anio=parseInt(prompt("Ingrese año"))

if (es_bisiesto(anio)== 28) {
    console.log("No es un año bisiesto")
} else {
    console.log("Es un año bisiesto")
}*/

/* Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y 10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de "No corresponde" */

/*let num_aleatorio= (Math.ceil(Math.random()*10));
let numero=parseInt(prompt("Ingrese un numero del 1 al 10"));
i=1


while (num_aleatorio!==numero) {
    alert("NO corresponde")
    numero=parseInt(prompt("Ingrese un numero del 1 al 10"))
    i++;
}

alert("Buen trabajo, el número era el " + num_aleatorio + " lo lograste luego de " + i  + " intentos");
console.log(num_aleatorio)*/

/* El siguiente código tiene un error que se produce en algunos casos especiales, descubrirlo y arreglarlo: */
 // Obtener edad

/*let edad=parseInt(prompt("Ingrese edad"));
if(edad < 13) {
    console.log("Es niño");
}else if(edad < 18 ){
     console.log("Es adolecente");
}else{
     console.log("Es adulto");
} */

/*Negar las siguientes expresión de forma de mantener la tabla de verdad, crear el programa que muestre el valor de la expresión a medida que se cambia los valores de a y b.

!a && !b
!a || !b */

//Loops

//WHILE

/* Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt. */

/*let n=parseInt(prompt("Ingrese un numero"));
i= 0

while (i<n) {
    i++
    console.log(i)


}*/

/*Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.*/

/*let n=prompt("Ingrese un numero");
while (tiene_letras(n)) {
    n= prompt("ERROR, solo debe ingresar números");
}
i= 0

while (i<n) {
    i= i + 2;
    console.log(i);
}*/

/* Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt. */

/*let n=prompt("Ingrese un numero");
while (tiene_letras(n)) {
    numero= prompt("ERROR, solo debe ingresar números");
}
i= n

while (i>=1) {
    console.log(i);
    i--
   
}*/

/* Escribir utilizando console.log la tabla del 9 hasta 9x10. */

/*n=9
i=1
while (i<=10) {
    console.log(n + "x" + i + " = " + n*i)
    i++;

}*/

/* Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras. TENGO DUDA*/

/*var texto=prompt("ingrese un numero");*/

/*while (tiene_letras(texto)) {
    texto= prompt("ERROR, solo debe ingresar números");
}*/

/*acum=0

for(x=0; x<texto.length;x++) {
    acum+=parseInt(texto.charAt(x));
}
console.log(acum);*/

/*let numero=parseInt(prompt)

while (Number.isNaN(numero)) {
    alert("Número invalido");
    numero=parseInt(prompt("Ingrese número nuevamente"));
}*/


/* Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario. */

let n= prompt("Ingrese un número");
while (tiene_letras(n)) {
    n= prompt("ERROR, solo debe ingresar números");
}
let m= prompt("Ingrese otro número");
while (tiene_letras(m)) {
    m= prompt("ERROR, solo debe ingresar números");
}

m=parseInt(m);
n=parseInt(n);
while (m<=n){
    m= parseInt(prompt("ERROR, debe ser mayor al anterior numero"));
}
i=n
acum=0

while (i<=m) {
    if (i%2==0) {
        console.log(acum + "+" + i + "=" + (acum+=i));
    }
    i++
} 
console.log(acum);

//Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario. 

/*let n= prompt("Ingrese un número");

acum=0
count=1
while (tiene_letras(n)) {
    n= prompt("ERROR, solo debe ingresar números");
}

while(count<=n) {
    console.log(acum + " + "+ count+ " = "+ (acum += count));
    count++
    
}
console.log(acum)*/

//Realizar el factorial de los primeros N números.

/*let n= prompt("Ingrese un número");

acum=1
count=1

while (tiene_letras(n)) {
    n= prompt("ERROR, solo debe ingresar números");
}

while(count<=n) {
    console.log(acum + " x "+ count+ " = "+ (acum *= count));
    count++
    
}

console.log(acum);*/

/*let numero=parseInt(prompt("Ingrese un numero"));
n=1
while(n<=numero){
    console.log(factorial(n));
    n++;
}

function factorial(n) {
    acum=1
    for (x=n;x>=1;x--) {
        acum *= x
    } return acum
}*/


/*while (count<n) {
    console.log(factorial(count));
    count++


}*/


//con FOR
/*for (count; count<n ; count++) {
    console.log(acum + " x "+ count+ " = "+ (acum *= count));
    
    
}

console.log(acum)*/

//Ejercicios de divisores con while (o for)

//Encontrar todos los divisores de un número.
/*let n=prompt("Ingrese un número");

while (tiene_letras(n)) {
    n= prompt("ERROR, solo debe ingresar números");
}

count=0
divisores=[]
for (count; count<=n; count++) {
    if (n%count==0) {
        divisores.push(count)


    }
}
console.log(divisores)*/

//Determinar si un número ingresado por el usuario en un loop es primo o no, validar que el número ingresado sea mayor o igual a dos.

/*let n=prompt("Ingrese un número");

while (tiene_letras(n) || n<2) {
    n= prompt("ERROR, solo debe ingresar números, mayor o igual a 2");
}

while (Number.isNaN(n) || n<2) {
    n=parseInt(prompt("Error, ingrese un número por favor que sea mayor o igual a 2."));
   
}

count=0
for (x=0; x<=n; x++) {
    if(n%x==0) {
        count++
    } 

    
} 

if (count > 2) {
    console.log(n + " no es un número primo");
} else {
    console.log(n + " es un número primo");

}*/

//Crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3)

/*let num_perfecto= prompt("Ingrese un numero, por favor");

while (tiene_letras(num_perfecto)) {
    num_perfecto= prompt("ERROR, solo debe ingresar números");
}

acum=0
for (x=0; x<num_perfecto; x++) {
    if (num_perfecto%x==0) {
        acum +=x
    }
}

acum==num_perfecto? console.log(num_perfecto + " es un numero perfecto") : console.log(num_perfecto + " no es un numero perfecto")*/


//DOBLE LOOP

//Generar los primeros N números primos, donde n es ingresado por el usuario.

/*n= prompt("Ingrese un numero");

while (tiene_letras(n)) {
    n= prompt("ERROR, solo debe ingresar números");
}

function es_primo(numero) {5
    count=0
    
    for(x=1; x<=(numero); x++) {       
        if ((numero)%x==0) {
            count++
        }
    }
    if (count==2) {
        
        return true;
        
    } else {
        return false;
    }
} 

let num_primos=[]
numero=1
while ((num_primos.length)<n) {
    if (es_primo(numero)){
        num_primos.push(numero);
    }
    numero++;
} console.log(num_primos)*/

//Generar los primeros N números perfectos.

/*function es_perfecto(numero) {
    acum=0
    for (x=1; x<numero; x++) {
        if (numero%x==0) {
            acum +=x
        }
        
    }
    if (acum==numero) {
        return true;
    }

}

let n= prompt("Ingrese un numero");

while (tiene_letras(n)) {
    n= prompt("ERROR, solo debe ingresar números");
}

num_perfectos=[]

numero=1
while ((num_perfectos.length)< n) {
    if (es_perfecto(numero) ){
        num_perfectos.push(numero);
    }
    numero++;
}
console.log(num_perfectos);*/


