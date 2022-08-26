//catalogo de productos del Bazar utilizando array

let catalogoBazar = [{
		id:1,
		nombre: 'Taza',
		codigo: 'UN3N293',
    	precio: 800,
    	categoria: 'Hogar',
    	imagen: './img/taza.jpg',
    	descripcion: 'Taza hecha de ceramica'
},{
		id:2,
		nombre: 'Juego de Platos',
		codigo: 'UN520S',
		categoria: 'Hogar',
    	precio: 4000,
    	imagen: './img/platos.jpg',
    	descripcion: 'Juego de platos de cristal, 12 unidades'
},{
		id:3,
		nombre: 'Cubiertos',
		codigo: 'UN3820',
		categoria: 'Hogar',
    	precio: 1500,
    	imagen: './img/cubiertos.jpg',
    	descripcion: 'Juego de cubiertos de acero'
},{
		id:4,
		nombre:'Vasos',
		codigo: 'UN2933',
		categoria: 'Hogar',
    	precio: 900,
    	imagen: './img/vasos.jpg',
    	descripcion: 'Juego de vasos de vidrio, 6 unidades'
},{
		id:5,
		nombre: 'Vaso',
		codigo: 'UN2933',
		categoria:'Hogar',
    	precio: 250,
    	imagen: './img/vaso.jpg',
    	descripcion: 'Vaso de vidrio por unidad.'
},{
		id:6,
		nombre: 'Sarten',
		codigo: 'UN63923',
		categoria: 'Cocina',
    	precio: 3000,
    	imagen: './img/sartren.jpg',
    	descripcion: 'Sarten anitadherente SKK 4cm'
},{
		id:7,
		nombre: 'Olla',
		codigo: 'UN38294',
		categoria: 'Cocina',
    	precio: 3500,
    	imagen: './img/olla.jpg',
    	descripcion: 'Olla de aluminio con doble tapa, anitadherente reforzado con titanio'
},{
		id:8,
		nombre: 'Cuadro pequeño',
		codigo: 'UN38j2i4',
		categoria: 'Decoracion',
    	precio: 1200,
    	imagen: './img/cuadroS.jpg',
    	descripcion: 'Cuadro pequeño, medida 15x21'
},{
		id:9,
		nombre:'Cuadro mediano',
		codigo: 'UN32942',
		categoria: 'Decoracion',
    	precio: 1800,
    	imagen: './img/cuadroM.jpg',
    	descripcion: 'Cuadro mediano, medida 21x30'
},{
		id:10,
		nombre: 'Cuadro Grande',
		codigo: 'UN28442',
		categoria: 'Decoracion',
    	precio: 2400,
    	imagen: './img/cuadroL.jpg',
    	descripcion: 'Cuadro grande, medida 45x65'
},{
		id:11,
		nombre: 'Reloj',
		codigo: 'UN38j2i4',
		categoria: 'Decoracion',
    	precio: 1800,
    	imagen: './img/reloj.jpg',
    	descripcion: 'Reloj de pared'
},{
		id:12,
		nombre: 'Planta de interior',
		codigo: 'UN9492',
		categoria:'Decoracion',
    	precio: 1500,
    	imagen: './img/plantaint.jpg',
    	descripcion: 'Planta para interiores'
},{
		id:13,
		nombre: 'Lampara pequeña',
		codigo: 'UN38j2i4',
		categoria: 'Decoracion',
    	precio: 1300,
    	imagen: './img/lampara.jpeg',
    	descripcion: 'Lampara pequeña de lectura'
},{
		id:14,
		nombre: 'Lampara grande',
		codigo: 'UN3424',
		categoria: 'Decoracion',
    	precio: 6390,
    	imagen: './img/lamparaM.jpg',
    	descripcion: 'Lampara de decoracion tamaño mediano'
}];

//Eventos y DOM

let contenedorTarjetas = document.querySelector('.contenedorTarjetas');

function crearTarjetas(array, contenedor) {
    contenedor.innerHTML = '';
    for (const item of array) {
        let tarjeta = document.createElement('div');
        tarjeta.className = 'card my-5';
        tarjeta.id = `${item.id}`;
        tarjeta.innerHTML = `
        <h4 class="card-header">${item.nombre}</h4>
        <img src="${item.imagen}" class="card-img-top imagenProducto" alt="${item.descripcion_corta}">
        <div class="card-body">
            <p class="card-text">${item.descripcion}</p>
            <span id="precio">$ ${item.precio}</span>
        </div>
        <div class="card-footer"><a href="#" class="btn btn-primary">Comprar</a></div>`;
        contenedor.append(tarjeta)
    }

}

function buscar(array, criterio, input) {
    return array.filter((item) => item[criterio].includes(input))
}

crearTarjetas(catalogoBazar, contenedorTarjetas);

let busqueda = document.querySelectorAll('.inputBusqueda');

busqueda.forEach(input => {
    input.addEventListener('input', () => {
        let cadena = (input.value).toUpperCase();
        console.log(cadena);
        crearTarjetas(buscar(catalogoBazar, input.id, cadena), contenedorTarjetas);
    	})
    })