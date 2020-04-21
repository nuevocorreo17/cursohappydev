// var numero1;
// numero1 = 12;

// var numero2 = 3;
// var numero3 = "45";
// var palabra = 'hola "mundo" ';
// var logica = false;
// var decimales = 5.5;

// var objeto = {"nombre":"Alonso","apellido":"Perez"};
// var lista2 = [1,2,3,4,5,6,7];
// var lista = ["alonso",numero2,logica,"mundo",lista2,objeto];

// console.log(numero2);
// console.log(numero3);
// console.log(lista);
// console.log(lista[4][6]);
// console.log(objeto);

// var cadena = "Hola,mundo";
//  console.log(cadena.length);
//  console.log(cadena.charAt(5));
//  //console.log(cadena.charAt(cadena.length - 1));
//  console.log(cadena.indexOf("o"));
//  console.log(cadena.lastIndexOf("o")); 
//  console.log(cadena.replace("Hola","hi")); 
//  console.log(cadena.search("mundo")); 
//  console.log(cadena.split(",")); 
//  console.log(cadena.substr(0,3)); 
//  console.log(cadena.substring(0,4)); 
//  console.log(cadena.toLowerCase()); 
//  console.log(cadena.toUpperCase());  
//  console.log(cadena.trim());
//  console.log(cadena.concat(" ","alonso"," ","perez"));

//  cadena =  cadena + " " + "alonso" + " " + "perez";
//  console.log(cadena);

// console.log(numero2.toString());
// console.log(numero2+"");

// var total = numero1 + numero2;
// console.log(total);

// total = numero1 - numero2;
// console.log(total);

// total = numero1 * numero2;
// console.log(total);

// total = numero1 / numero2;
// console.log(total);

// total = 13 % numero2;
// console.log(total);

// console.log(Math.pow(2,3));
// console.log(Math.sqrt(81));

// console.log(numero1 > numero2);
// console.log(numero1 >= 12);
// console.log(numero1 < numero2);
// console.log(3 <= numero2);
// console.log(numero1 == numero2);
// console.log(numero1 != numero2);
// console.log(numero1 === "12");

// var hola;
// function sumar(n1 = 0,n2 = 0)
// {
// 	//console.log(n1 + n2);
// 	 hola = n1 + n2;
// }

// function restar(n1 = 0,n2 = 0)
// {
// 	return n1 - n2;
// }

// sumar(10,5);
// console.log(hola);

// var total = restar(9,4);
// console.log(total);

//alert("hola");

// var respuesta = confirm("¿Deseas salir de la pagina?");

// var rpta1 = prompt("Ingrese numero 1");
// var rpta2 = prompt("Ingrese numero 2");

// console.log(parseFloat(rpta1) + parseFloat(rpta2));

// setTimeout(function(){
// 	alert("holaaa");
// },1000);

// setInterval(function(){
// 	console.log(new Date());
// },1000);

 //var numero = prompt("Ingresa un numero");

// if ((numero > 0) && (numero < 10))
// {
// 	alert("Eres menor de edad");
// }else if(numero == 10){
// 	alert("tienes 10 años");
// }else if((numero > 10) && (numero < 18)){
// 	alert("sigues siendo menor");
// }else{
// 	alert("eres mayor");
// }

// numero = parseInt(numero);
// switch (numero)
// {
// 	case 0:
// 		alert("recien naciste");
// 		break;
// 	case 18:
// 		alert("recien eres mayor");
// 		break;
// 	case 50:
// 		alert("eres anciano");
// 		break;	
// 	default:
// 		alert("tienes otra edad");
// }

// var semana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

// var nombre = "alonso";

// for (var i = 0; i < semana.length; i++) {
// 	console.log(semana[i]);
// }

// for (var i = semana.length - 1; i >= 0  ; i--) {
// 	console.log(semana[i]);
// }

// for (var i = 0; i < nombre.length; i++) {
// 	console.log(nombre.charAt(i));
// }

// var cocinero1 = document.getElementById("cocinero1");

// //alert(cocinero1.innerHTML);

// cocinero1.innerHTML = "Alonso Perez";
// cocinero1.id = "avion";
// cocinero1.className = "clase clase2";

// var titulos = document.getElementsByTagName("h2");

// for (var i = 0; i < titulos.length; i++) {
// 	titulos[i].id = "cocinero"+i;
// }

// var columnas = document.getElementsByClassName("columna");

// console.log(columnas);

// for (var i = 0; i < columnas.length; i++) {
// 	columnas[i].id = "columna"+i;
// }

// var enlaces = document.querySelectorAll("header nav a");

//  console.log(enlaces);

// for (var i = 0; i < enlaces.length; i++) {
// 	enlaces[i].id = "enlaces"+i;
// }

// var enlace = document.querySelector("header nav a");

// enlace.className = "soyprimero";

 var cocinero1 = document.getElementById("cocinero1");

 // cocinero1.onclick = function(){
 // 	alert("soy el cocinero pepito");
 // }


  cocinero1.addEventListener("click",function(){
  		alert("soy el cocinero pepito 2");
  })