const cards = document.getElementById('cards');
const items = document.getElementById('items');
const footer = document.getElementById('footer');
const templateCard = document.getElementById('template-card').content;
const templateFooter = document.getElementById('template-footer').content;
const templateCarrito = document.getElementById('template-carrito')
const fragmento = document.createDocumentFragment();
let carrito = [];

//Fetch

document.addEventListener('DOMContentLoaded', ()=>{
    fetchData();
    if(localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        crearCarrito()
    }
})
//Eventos
cards.addEventListener("click", e =>{
    addCarrito(e)
})

items.addEventListener('click', e=>{
    btnAccion(e)
})

const fetchData = async () => {
    try {
        const respuesta = await fetch('data.json',{
            method: 'GET',
            headers: new Headers({ 'Content-type': 'application/json'}),
            mode: 'no-cors'
});
        const data = await respuesta.json()
        crearTarjetas(data)
    } catch (error){
        console.log('error')
    }


//Imprimir las tarjetas en la pantalla
const crearTarjetas = data =>{
        data.forEach(producto =>{
            templateCard.querySelector('h3').textContent = producto.nombre
            templateCard.querySelector('p').textContent = producto.precio
            templateCard.querySelector('img').setAttribute("src", producto.imagen)
            templateCard.querySelector('.btn-dark').dataset.id = producto.id

            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
        })
    
    cards.appendChild(fragment)
}

//Agregar producto al carrito

const addCarrito = e =>{
    if(e.target.classList.contains('btn-dark')){
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

//Producto en carrito aumenta cantidad de unidades. Creacion o sobre escribirlo.
const setCarrito = objeto =>{
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h3').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {...producto}
    crearCarrito()
    } 

const crearCarrito = () =>{
    items.innerHTML = ''
    object.values(carrito).forEach(producto =>{
            templateCarrito.querySelector('th').textContent = producto.id
            templateCarrito.querySelectorAll('td')[0].textContent = producto.title
            templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
            templateCarrito.querySelector('.btn-info').dataset.id = producto.id
            templateCarrito.querySelector('btn-danger').dataset.id= producto.id
            templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio
            const clone = templateCarrito.cloneNode(true)
            fragment.appendChild(clone)
    })

    items.appendChild(fragment)

    crearFooter()

    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const crearFooter = () => {
    footer.innerHTML= '';
    if(Object.keys(carrito).lenght === 0){
        footer.innerHTML = `
        <th scope="row" colspan="5"> Carrito vacio, ¡comienza a comprar!</th>
        `
        return 
    }

//Calculo de precio 
    const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad ,0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio})=> acc + cantidad * precio,0)
    
    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone =  templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)
    const btnVaciar = getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        carrito= [];
        crearCarrito()
    })
}

//Detectar los botones 
const btnAccion = e =>{
    console.log(e.target)
    //Accion de aumentar
    if(e.target.classList.contains('btn-info')){
        const producto = carrito[e.target.dataset.id]
        producto.cantidad = carrito[e.target.dataset.id].cantidad + 1
        carrito[e.target.dataset.id] = {...producto}
        crearCarrito()
    }
    if (e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
        crearCarrito()
    }
    e.stopPropagation();
    }