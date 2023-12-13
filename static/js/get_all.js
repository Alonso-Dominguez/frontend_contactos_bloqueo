// Verificar si el token está presente en el sessionStorage
const token = sessionStorage.getItem('token');
if (!token) {
    // Si no hay token, redirige al usuario a la página de inicio de sesión
    window.location.href = "/";
}

async function getAll() {
    const apiURL = 'https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/contactos';

    // Obtén el token desde donde lo tengas almacenado
    const token = sessionStorage.getItem('token');

    try {
        const headers = new Headers({
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        });

        const response = await fetch(apiURL, {
            method: 'GET',
            headers: headers,
        });

        if (response.ok) {
            const contactos = await response.json();
            console.log(contactos);
        } else {
            const errorData = await response.json();
            alert(`Error al obtener la lista de contactos: ${errorData.detail}`);
        }
    } catch (error) {
        console.error('Error inesperado:', error);
        alert('Error inesperado al obtener la lista de contactos.');
    }
}

getAll();
