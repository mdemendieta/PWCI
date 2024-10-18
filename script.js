const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

// Mostrar el formulario de registro
registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

// Mostrar el formulario de inicio de sesión
loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

// Validación de Iniciar Sesión
document.getElementById('formularioIniciarSesion').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío por defecto

    const usuarioIniciarSesion = document.getElementById('usuarioIniciarSesion').value;
    const contrasenaIniciarSesion = document.getElementById('contrasenaIniciarSesion').value;
    let erroresIniciarSesion = '';

    // Validar si los campos están vacíos
    if (usuarioIniciarSesion === '') {
        erroresIniciarSesion += 'El nombre de usuario es obligatorio.<br>';
    }
    if (contrasenaIniciarSesion === '') {
        erroresIniciarSesion += 'La contraseña es obligatoria.<br>';
    }

    if (erroresIniciarSesion) {
        alert(erroresIniciarSesion);  // Puedes personalizar esto con un div en vez de alert
    } else {
        alert('Inicio de sesión exitoso');
    }
});

// Validación de Registro
document.getElementById('formularioRegistro').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío por defecto

    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const correoElectronico = document.getElementById('correoElectronico').value;
    const nombreUsuario = document.getElementById('nombreUsuario').value;
    const contrasena = document.getElementById('contrasena').value;
    let erroresRegistro = '';

    // Validar nombre
    if (nombre === '') {
        erroresRegistro += 'El nombre es obligatorio.<br>';
    }
    // Validar apellidos
    if (apellidos === '') {
        erroresRegistro += 'Los apellidos son obligatorios.<br>';
    }
    // Validar fecha de nacimiento
    if (fechaNacimiento === '') {
        erroresRegistro += 'La fecha de nacimiento es obligatoria.<br>';
    }
    // Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correoElectronico)) {
        erroresRegistro += 'El correo electrónico no es válido.<br>';
    }
    // Validar nombre de usuario
    if (nombreUsuario === '') {
        erroresRegistro += 'El nombre de usuario es obligatorio.<br>';
    }
    // Validar contraseña
    if (contrasena.length < 6) {
        erroresRegistro += 'La contraseña debe tener al menos 6 caracteres.<br>';
    }

    if (erroresRegistro) {
        alert(erroresRegistro);  // Puedes personalizar esto con un div en vez de alert
    } else {
        alert('Registro exitoso');
    }
});