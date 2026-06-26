let carrito = [];

// selección de elementos del DOM
const searchInput = document.getElementById("product-search");
const searchButton = document.getElementById("search-btn");
const clearButton = document.getElementById("clear-btn");
const resultsContainer = document.getElementById("results-container");
const cartCounter = document.getElementById("cart-counter");
const notificationToast = document.getElementById("notification-toast");

// sistema de búsqueda y filtrado
function searchProducts() {
  const query = searchInput.value.toLowerCase().trim();
  resultsContainer.innerHTML = ""; 

  const filteredProducts = stocktaking.filter(producto => 
      producto.nombre.toLowerCase().includes(query) || 
      producto.category.toLowerCase().includes(query)
  );

  if (filteredProducts.length === 0) {
      resultsContainer.innerHTML = "<p class='no-results'>No se encontraron productos.</p>";
      return;
  }

  filteredProducts.forEach(producto => {
      const cardElement = producto.createHTMLCard();
      resultsContainer.appendChild(cardElement); 
  });

  vincularBotonesCarrito();
}

// manejador del flujo de notificaciones instantáneas
function notificationPush(mensaje) {
  notificationToast.textContent = mensaje;
  notificationToast.style.display = "block";
    
  setTimeout(() => {
    notificationToast.style.display = "none";
  }, 3000);
}

// eventos del ciclo de vida y click
document.addEventListener("DOMContentLoaded", () => {
  searchProducts();
  
  setTimeout(() => {
    notificationPush("¡Promoción exclusiva! 15% de descuento usando el código WEB2.");
  }, 2000);
});

// listener para el botón de Buscar
searchButton.addEventListener("click", searchProducts);

// listener para el botón de Limpiar
clearButton.addEventListener("click", () => {
    searchInput.value = "";
    searchProducts();
});

// listener para presionar Enter en el teclado
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") searchProducts();
});

function vincularBotonesCarrito() {
    const botones = document.querySelectorAll(".add-to-cart-btn");
    botones.forEach(boton => {
        boton.replaceWith(boton.cloneNode(true));
    });

    document.querySelectorAll(".add-to-cart-btn").forEach(boton => {
      boton.addEventListener("click", (e) => {
          const idProducto = parseInt(e.target.getAttribute("data-id"));
          const productoSeleccionado = stocktaking.find(p => p.id === idProducto);
          
          if (productoSeleccionado) {
              carrito.push(productoSeleccionado);
              cartCounter.textContent = carrito.length;
              notificationPush(`¡${productoSeleccionado.nombre} fue añadido al carrito!`);
          }
      });
    });
}