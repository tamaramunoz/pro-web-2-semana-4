<?php
class Pedido {
    public $descripcion;
    public $tipo_pedido;
    public $producto;
    public $unidades;
    public $observaciones;

    public function __construct($descripcion, $tipo_pedido, $producto, $unidades, $observaciones) {
        $this->descripcion = $descripcion;
        $this->tipo_pedido = $tipo_pedido;
        $this->producto = $producto;
        $this->unidades = (int)$unidades;
        $this->observaciones = $observaciones;
    }
}
?>