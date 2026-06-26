<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Pliant:wght@100..900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <title>Tienda de Comercio Electrónico - FullStack</title>
</head>
<body>
    <div id="notification-toast" class="toast" style="display: none;"></div>

    <header class="store-header">
        <h2>Tienda Online</h2>
        <div id="cart-status">Carrito: <span id="cart-counter">0</span> productos</div>
    </header>

    <div class="search-container">
        <input type="text" id="product-search" placeholder="Buscar producto">
        <button id="search-btn">Buscar</button>
        <button id="clear-btn">Limpiar</button> 
    </div>

    <div id="results-container"></div>

    <hr style="max-width: 800px; margin: 40px auto; border: 0; border-top: 1px dashed #ccc;">

    <?php
    // función PHP para formatear y renderizar las reseñas
    function generarTarjetaResena($usuario, $calificacion, $comentario) {
        $calificacion = (int)$calificacion;
        if ($calificacion < 1) $calificacion = 1;
        if ($calificacion > 5) $calificacion = 5;
        
        $estrellas = str_repeat("★", $calificacion) . str_repeat("☆", 5 - $calificacion);
        $usuarioLimpio = htmlspecialchars($usuario);
        $comentarioLimpio = htmlspecialchars($comentario);

        return "
        <div class='review-card'>
            <h4>Usuario: {$usuarioLimpio} <span>{$estrellas}</span></h4>
            <p>{$comentarioLimpio}</p>
        </div>";
    }
    ?>

    <script src="producto.js"></script> 
    <script src="app.js"></script>
</body>
</html>