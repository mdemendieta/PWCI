$(document).ready(function(){
    // Funcionalidad del menú lateral
    $(".sidebar-btn").click(function(){
        $(".wrapper").toggleClass("collapse");
    });

    // Validaciones para el formulario de edición de publicación
    $('#formularioPublicacion').on('submit', function(event) {
        event.preventDefault(); // Prevenir envío del formulario

        let titulo = $('#titulo').val().trim();
        let categoria = $('#categoria').val();
        let descripcion = $('#descripcion').val().trim();
        let errores = '';

        // Validar campo de título
        if (titulo === '') {
            errores += 'El campo de título no puede estar vacío.<br>';
        }

        // Validar selección de categoría
        if (categoria === '0') {
            errores += 'Debes seleccionar una categoría.<br>';
        }

        // Validar campo de descripción
        if (descripcion === '') {
            errores += 'El campo de descripción no puede estar vacío.<br>';
        }

        // Mostrar errores si los hay o continuar con el envío
        if (errores !== '') {
            alert(errores); 
        } else {
            alert('Publicación editada con éxito');
        }
    });
});