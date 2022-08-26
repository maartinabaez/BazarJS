let contraseña= "calculo";

function inicioSesion() {
	let ingreso = false;

		for(let i=3; i<=3; i--) {
			let tuContraseña = prompt("Ingresa tu contraseña");

			if(tuContraseña===contraseña){
				alert("Bienvenido/a!");
				ingreso= true;
				break;
			}
			else{
				alert("Contraseña incorrecta, te quedan " + i + " intentos.")
			}
		}

	return ingreso;
}


inicioSesion();

//Calculadora para ganancia de un bazar

const suma = (a,b) => a + b;
const ganancia = (a,b) => a - b;
const porcentajeGanancia = x => x * 1.20; //este numero es porque el vendedor quiere sacar un 20% de ganancia

let precioCosto= parseInt(prompt("Ingrese precio costo"));
let precioVenta= ganancia(suma(precioCosto,porcentajeGanancia(precioCosto)), precioCosto);

console.log(precioVenta);

//productos

class Producto{
		constructor(nombre, categoria, precio){
	this.nombre= nombre;
	this.categoria = categoria;
	this.precio= parseFloat(precio);
					}

				}

const Productos =[taza , juegoPlatos, cubiertos, vasos, vaso, sarten, olla, cuadroS, cuadroM, cuadroL,
reloj, plantaInterior, lamparaS, lamparaL];


const taza= new Producto('Taza', 'hogar', 800);
const juegoPlatos= new Producto('Juego de platos', 'hogar', 4000)
const cubiertos= new Producto('Juego de cubiertos', 'hogar', 1500)
const vasos= new Producto('Vasos', 'hogar', 900)
const vaso= new Producto('Vaso', 'hogar', 250)
const sarten= new Producto('Sarten', 'cocina', 3000)
const olla= new Producto('Olla', 'cocina', 3500)
const cuadroS= new Producto('Cuadro pequeño', 'decoracion', 1200)
const cuadroM= new Producto('Cuadro mediano', 'decoracion', 1800)
const cuadroL= new Producto('Cuadro grande', 'decoracion', 2400)
const reloj= new Producto('Reloj', 'decoracion', 1800)
const plantaInterior= new Producto('Planta de interior', 'decoracion', 1500)
const lamparaS= new Producto ('Lampara pequeña', 'decoracion', 1300)
const lamparaL= new Producto('Lampara grande', 'decoracion', 2000)

console.log(Producto)

//Buscar categoria

let keyword = prompt(‘Ingresa la categoria del producto que busca’);
const filtrado = Producto.filter( (nuevoProducto) => nuevoProducto.categoria.includes(keyword));

console.log(filtrado)


//Carrito de compras 

const carrito= []

let nuevoCategoria= prompt('Ingrese la categoria del producto que quiere comprar')
let nuevoNombre=prompt('Ingrese nombre del producto que quiere comprar')

let nuevoProducto= {nuevoCategoria, nuevoNombre}

carrito.push(nuevoProducto);

console.log(carrito)

inicioSesion();
