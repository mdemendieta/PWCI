<?php
// Datos de la conexión
$servidor = "localhost"; // o "127.0.0.1"
$usuario = "root"; // Usuario por defecto en XAMPP
$contraseña = "1234"; // Contraseña vacía en XAMPP
$base_datos = "PWCI"; // Reemplaza con el nombre de tu base de datos

// Crear la conexión
$conexion = new mysqli($servidor, $usuario, $contraseña, $base_datos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("La conexión ha fallado: " . $conexion->connect_error);
}



// Cerrar la conexión
$conexion->close();
?>