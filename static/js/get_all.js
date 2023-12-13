async function getAll() {
    const apiURL = 'https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/contactos';

    // Obtén el token desde donde lo tengas almacenado
    const token = localStorage.getItem('token');

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
