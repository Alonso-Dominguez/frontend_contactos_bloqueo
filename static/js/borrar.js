async function borrarContacto() {
    const apiURL = 'https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/contactos';

    // Obtén el token desde donde lo tengas almacenado
    const token = localStorage.getItem('token');

    try {
        const id = document.getElementById('borrar-id').value;

        const headers = new Headers({
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        });

        const response = await fetch(`${apiURL}/${id}`, {
            method: 'DELETE',
            headers: headers,
        });

        if (response.ok) {
            alert('Contacto borrado correctamente.');
            document.location.reload();
        } else {
            const errorData = await response.json();
            alert(`Error al borrar el contacto: ${errorData.detail}`);
        }
    } catch (error) {
        console.error('Error inesperado:', error);
        alert('Error inesperado al borrar el contacto.');
    }
}

borrarContacto();
