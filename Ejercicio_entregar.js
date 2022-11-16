//Operaciones básicas, Tipos de datos, Prompt y Alert

/*Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma.*/

/*let num_uno = parseInt(prompt("Ingrese un número"));
let num_dos = parseInt(prompt("Ingrese otro número"));

alert(num_uno + num_dos);*/

/* Crear un programa donde el usuario ingrese en un prompt la temperatura en Celsius y el programa muestre en una alerta la temperatura en Fahrenheit.*/

/*let celsius=parseFloat(prompt("Ingrese una temperatura en °C"))
let fahrenheit= celsius*1.8 + 32;

alert("La temperatura en Fahrenheit es " + fahrenheit + "°F" )*/

/* Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5 */

/*let numero=parseInt(prompt("Ingrese un número"));
let resultado=numero/10;

alert(resultado);*/

/* Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a. */

/*let a = [1,2,3];
alert(typeof a);*/

//If and else

/* Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta. */

/*let numero=parseInt(prompt("Ingrese un numero"));

if (numero%2 == 0) {
    alert(numero + " es un numero par");
} else {
    alert(numero + " es un numero impar");
}*/

/* Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log */

/*let numero=parseInt(prompt("Ingrese un número"));

if (numero%5 == 0) {
    console.log(numero + " es divisible por 5. El resultado es " + numero/5)
} else {
    console.log(numero + " NO es divisible por 5");
}*/

/* Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log */

/*let numero=parseInt(prompt("Ingrese un número"));

if (numero%5 == 0 && numero%11==0) {
    console.log(numero + " es divisible por 5 y 11. " + numero + "dividido 5 es " + numero/5 ". Y " + numero" dividido 11 es " + numero/11)
} else {
    console.log(numero + " NO es divisible por 5 y 11")
}*/

/* Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor. */
/*let num_uno = parseInt(prompt("Ingrese un numero"));
let num_dos = parseInt(prompt("Ingrese otro numero"));

if (num_uno>num_dos) {
    alert(num_uno + " es mayor");
} else {
    alert(num_dos + " es mayor");
}*/

/* Crear un programa que le pida al usuario primero un números al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario. */

/*let num_uno = parseInt(prompt("Ingrese un numero"));
let num_dos = parseInt(prompt("Ingrese otro numero"));

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
let ang_dos= parseFloat(prompt("Ingrese ángulo interno 2"));
let ang_tres= parseFloat(prompt("Ingrese ángulo interno 3"));

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

/*let n=parseInt(prompt("Ingrese un numero"));
i= 0

while (i<n) {
    i= i + 2;
    console.log(i);
}*/

/* Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt. */

/*let n=parseInt(prompt("Ingrese un numero"));
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

/*var numero=parseInt(prompt("Ingrese un numero"));
x=0
i=0
n=0
while (Number.isNaN(numero.charAt(x))) {
    alert("Número invalido");
    numero=parseInt(prompt("Ingrese número nuevamente"));
}
numero=numero.toString()
alert("Número válido");


while (x<numero.length ) {
    i += parseInt(numero.charAt(x))
    x++

}
console.log(i);*/

   
/* Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario. */

/*let n= parseInt(prompt("Ingrese un número"));
let m= parseInt(prompt("Ingrese otro número"));

while (n>m) {
    m= parseInt(prompt("ERROR, ingrese un número más grande que el anterior por favor"));
}
    
i=n
acum=0

while (i<=m) {
    if (i%2==0) {
        
        sumar= x + " + " + i + " = " + (acum+=i)
        console.log(sumar);
        

    }
    i++
} 
console.log(acum);*/

//Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario. 

/*let n= parseInt(prompt("Ingrese un número"));

acum=0
count=1

while (!Number.isInteger(n)) {
    n= parseInt(prompt("Error, ingrese un número por favor"))
}

while(count<=n) {
    console.log(acum + " + "+ count+ " = "+ (acum += count));
    count++
    
}
console.log(acum)*/

//Realizar el factorial de los primeros N números.


/*let n= parseInt(prompt("Ingrese un número"));

acum=n
count=1

while (!Number.isInteger(n)) {
    n= parseInt(prompt("Error, ingrese un número por favor"))
}

while(count<n) {
    console.log(acum + " x "+ count+ " = "+ (acum *= count));
    count++
    
}

console.log(acum)*/

//con FOR
/*for (count; count<n ; count++) {
    console.log(acum + " x "+ count+ " = "+ (acum *= count));
    
    
}

console.log(acum)*/

//Ejercicios de divisores con while (o for)

//Encontrar todos los divisores de un número.
/*let n=parseInt(prompt("Ingrese un número"));

while (Number.isNaN(n)) {
    n=parseInt(prompt("Error, ingrese un número"));

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


let n=parseInt(prompt("Ingrese un número"));

while (n<2) {
    n=parseInt(prompt("Error, ingrese un número mayor o igual a 2"));

}








    





