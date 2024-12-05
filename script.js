
// script.js
let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  // Añadir producto al carrito
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const listaCarrito = document.getElementById('lista-carrito');
  const totalElement = document.getElementById('total');

  // Limpiar la lista
  listaCarrito.innerHTML = '';

  // Mostrar los productos en el carrito
  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio}`;
    listaCarrito.appendChild(li);
  });

  // Calcular el total
  total = carrito.reduce((acc, item) => acc + item.precio, 0);
  totalElement.textContent = `Total: $${total}`;
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}
