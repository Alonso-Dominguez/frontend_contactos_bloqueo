// Verificar si el token está presente en el sessionStorage
const token = sessionStorage.getItem('token');
if (!token) {
    // Si no hay token, redirige al usuario a la página de inicio de sesión
    window.location.href = "/";
}

// Obtén el token desde donde lo tengas almacenado
const token = localStorage.getItem('token');

async function eliminarContacto() {
    const apiURL = 'https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/contactos';

    try {
        const email = document.getElementById('eliminar-email').value;

        const headers = new Headers({
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        });

        const response = await fetch(`${apiURL}/${email}`, {
            method: 'DELETE',
            headers: headers,
        });

        if (response.ok) {
            alert('Contacto eliminado correctamente.');
        } else {
            const errorData = await response.json();
            alert(`Error al eliminar el contacto: ${errorData.detail}`);
        }
    } catch (error) {
        console.error('Error inesperado:', error);
        alert('Error inesperado al eliminar el contacto.');
    }
}
