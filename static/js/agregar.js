async function agregarContacto() {
    try {
        const nombre = document.getElementById('nombre').value;
        const primer_apellido = document.getElementById('primer_apellido').value;
        const segundo_apellido = document.getElementById('segundo_apellido').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;

        const response = await fetch('https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/contactos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre: nombre,
                primer_apellido: primer_apellido,
                segundo_apellido: segundo_apellido,
                email: email,
                telefono: telefono,
            }),
        });

        if (response.ok) {
            alert('Contacto agregado correctamente.');
            // Actualizar la interfaz de usuario según sea necesario, sin recargar toda la página
        } else {
            const errorData = await response.json();
            alert(`Error al agregar el contacto: ${errorData.detail}`);
        }
    } catch (error) {
        console.error('Error inesperado:', error);
        alert('Error inesperado al agregar el contacto.');
    }
}
