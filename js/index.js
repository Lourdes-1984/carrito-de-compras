let productos = [];
let total = 0;

function agregar( producto , precio){
    let cantidad = productos.length;
    console.log(cantidad, productos.length);
    productos.push(producto);
    total = total + precio;
    document.getElementById('pagar').innerHTML =`Total $${total}` 
    document.getElementById('cantidad').value = productos.length  

}



function pagar( producto , precio){
    console.log(producto,precio);
    
}
const funcion_prueba = () => {
    console.log('nuevo comit')
}