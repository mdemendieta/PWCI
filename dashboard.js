$(document).ready(function(){
    $(".sidebar-btn").click(function(){
        $(".wrapper").toggleClass("collapse");
    });
});

document.getElementById('formularioPerfil').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir envío por defecto

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const nombreUsuario = document.getElementById('nombreUsuario').value;
    const correoElectronico = document.getElementById('correoElectronico').value;
    const edad = document.getElementById('edad').value;
    const contrasena = document.getElementById('contrasena').value;
    let erroresPerfil = '';

    // Validación de nombre
    if (nombre === '') {
        erroresPerfil += 'El nombre es obligatorio.<br>';
    }

    // Validación de apellido
    if (apellido === '') {
        erroresPerfil += 'El apellido es obligatorio.<br>';
    }

    // Validación de nombre de usuario
    if (nombreUsuario === '') {
        erroresPerfil += 'El nombre de usuario es obligatorio.<br>';
    }

    // Validación de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correoElectronico)) {
        erroresPerfil += 'El correo electrónico no es válido.<br>';
    }

    // Validación de edad
    if (isNaN(edad) || edad <= 0) {
        erroresPerfil += 'La edad debe ser un número positivo.<br>';
    }

    // Validación de contraseña
    if (contrasena.length < 6) {
        erroresPerfil += 'La contraseña debe tener al menos 6 caracteres.<br>';
    }

    if (erroresPerfil) {
        alert(erroresPerfil); // Puedes personalizar esto con un div en vez de alert
    } else {
        alert('Cambios guardados con éxito');
    }
});
