// Verificar si el token está presente en el sessionStorage
const token = sessionStorage.getItem('token');
if (!token) {
    // Si no hay token, redirige al usuario a la página de inicio de sesión
    window.location.href = "/";
}

async function actualizarContacto() {
    const apiURL = 'https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/actualizar_contactos';

    // Obtén el token desde donde lo tengas almacenado
    const token = localStorage.getItem('token');

    try {
        const email = document.getElementById('actualizar-email').value;
        const nuevoNombre = document.getElementById('actualizar-nombre').value;
        const nuevoApellido_paterno = document.getElementById('actualizar-apellido-paterno').value;
        const nuevoApellido_materno = document.getElementById('actualizar-apellido-materno').value;
        const nuevoTelefono = document.getElementById('actualizar-telefono').value;

        const headers = new Headers({
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        });

        const body = JSON.stringify({
            nombre: nuevoNombre,
            primer_apellido: nuevoApellido_paterno,
            segundo_apellido: nuevoApellido_materno,
            telefono: nuevoTelefono,
        });

        const response = await fetch(`${apiURL}/${email}`, {
            method: 'PUT',
            headers: headers,
            body: body,
        });

        if (response.ok) {
            alert('Contacto actualizado correctamente.');
            // Redirige a la página de inicio después de la actualización
            window.location.href = "/inicio";
        } else {
            const errorData = await response.json();
            alert(`Error al actualizar el contacto: ${errorData.detail}`);
        }
    } catch (error) {
        console.error('Error inesperado:', error);
        alert('Error inesperado al actualizar el contacto.');
    }
}
