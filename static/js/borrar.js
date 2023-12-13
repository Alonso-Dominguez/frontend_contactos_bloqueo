async function borrarContacto() {
    try {
        const id = document.getElementById('borrar-id').value;
        const response = await fetch(`https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/contactos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            alert('Contacto borrado correctamente.');
            // Actualizar la interfaz de usuario según sea necesario, sin recargar toda la página
        } else {
            const errorData = await response.json();
            alert(`Error al borrar el contacto: ${errorData.detail}`);
        }
    } catch (error) {
        console.error('Error inesperado:', error);
        alert('Error inesperado al borrar el contacto.');
    }
}
