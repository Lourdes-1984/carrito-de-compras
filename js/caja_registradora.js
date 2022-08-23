const listaProductos = [
    {nombre: "Tomate", valor: 20 },
    {nombre: "Lechuga", valor: 45 },
    {nombre: "Carne", valor: 15 },
    {nombre: "Leche", valor: 18 },
    {nombre: "Arroz", valor: 12 },
    {nombre: "Huevo", valor: 1.5 }
];

var CarritoCompra = [];

function InicializarSelect()
{
   let elemento = document.getElementById("selProducto");
   for(let elem of listaProductos)
   {
       let opt = document.createElement('option');
       opt.value = elem.nombre; 
       opt.innerHTML = elem.nombre;
       elemento.appendChild(opt);
   }
}

function AgregarProducto(e)
{
    e.preventDefault();
    let producto = document.getElementById("selProducto").value;
    let cantidad = document.getElementById("txtCantidad").value;
    let valor = 0;

    for(let elem of listaProductos)
    {
        if(producto == elem.nombre)
        {
            valor = elem.valor;
        }
    }

    CarritoCompra.push({nombre: producto, cantidad: cantidad, precioUnidad: valor});
    CargarListaProducto();
}

function CargarListaProducto()
{
    let elemento = document.getElementById("ListaProductos");
    elemento.innerHTML = "";

    for (let elem of CarritoCompra)
    {
        let li = document.createElement('li');
        li.innerHTML = `Producto: ${elem.nombre} - Cantidad: ${elem.cantidad} - Precio Unidad: ${elem.precioUnidad}`
        elemento.appendChild(li);
    }
}

function CalcularTotal(e)
{
    let elemento = document.getElementById('resultado');
    elemento.innerHTML = '';

    let suma = 0;
    for (let elem of CarritoCompra)
    {
        suma += (elem.precioUnidad * elem.cantidad);
    }
    elemento.innerHTML = `El total a pagar es: ${suma}`;
}

var btnAgregarAlCarrito = document.getElementById('AgregarAlCarrito');
btnAgregarAlCarrito.addEventListener('click', AgregarProducto);

var btnCalcularTotal = document.getElementById('CalcularTotal');
btnCalcularTotal.addEventListener('click', CalcularTotal);

InicializarSelect();