# Gestión de Pedidos y Reseñas - Programación Web II (Semana 4)

Este proyecto consiste en una aplicación web dinámica orientada al servidor (backend) que simula el núcleo operativo de una tienda en línea. Implementa el uso de funciones de usuario en PHP, programación orientada a objetos (POO) del lado del servidor, diseño de formularios y la recuperación y validación segura de datos mediante variables superglobales.

## Estructura del Proyecto

Para cumplir con las buenas prácticas de desarrollo y el principio de separación de responsabilidades, el código se ha dividido de la siguiente manera:

* `index.php`: Interfaz principal que integra de forma híbrida el formulario para la publicación de reseñas de productos y el formulario de registro de nuevos pedidos.
* `Pedido.php`: Modelado de datos en el servidor. Define la clase `Pedido` junto con su constructor, propiedades obligatorias y métodos para la gestión y filtrado personalizado de transacciones.
* `procesar_pedido.php`: Script de backend encargado de interceptar las peticiones HTTP, validar la consistencia de los datos del cliente, instanciar los objetos y renderizar la confirmación de la operación.

## Características Implementadas

1. **Funciones del Lado del Servidor:** Implementación de la función `generarTarjetaResena()` para encapsular la lógica de negocio, formatear el renderizado de comentarios y sanitizar entradas contra ataques XSS mediante `htmlspecialchars`.
2. **Programación Orientada a Objetos (POO):** Modelado avanzado utilizando clases de PHP con propiedades públicas, encapsulación de métodos operativos e inicialización dinámica mediante constructores nativos (`__construct`).
3. **Formularios Dinámicos:** Creación de formularios HTML estructurados y vinculados directamente a los atributos de las clases mediante identificadores `name` específicos.
4. **Recuperación Segura de Datos (`$_POST`):** Uso de la matriz asociativa superglobal de PHP para capturar los paquetes de información de manera invisible en la URL, asegurando un paso de variables óptimo para la gestión de compras.
5. **Validación en el Servidor:** Mecanismos de control mediante `empty()` y filtros lógicos que impiden el procesamiento de solicitudes vacías, garantizando la persistencia y calidad de la información antes de interactuar con el modelo.
6. **Motor de Búsqueda Personalizado:** Inclusión del método `coincideConBusqueda()` dentro del objeto para evaluar criterios insensibles a mayúsculas/minúsculas de manera interna en el servidor.

## Tecnologías utilizadas:

- PHP
- HTML5
- CSS3

## Desarrollado por:

- Tamara Muñoz
