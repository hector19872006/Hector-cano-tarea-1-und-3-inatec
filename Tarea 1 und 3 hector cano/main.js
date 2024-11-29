// main.js

// Función para agregar un producto al carrito
function addToCart(productName) {
    alert(`${productName} ha sido añadido al carrito.`);
}

// Agregar evento a los botones de añadir al carrito
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.product-card button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.parentElement.querySelector('h3').innerText;
            addToCart(productName);
        });
    });
});

// Manejar el menú de navegación en dispositivos móviles
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
});