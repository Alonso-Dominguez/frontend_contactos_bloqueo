// Verificar si el token está presente en el sessionStorage
const token = sessionStorage.getItem('token');
if (!token) {
    // Si no hay token, redirige al usuario a la página de inicio de sesión
    window.location.href = "/";
}

async function cargarContactos() {
    const apiURL = 'https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/contactos';

    try {
        const headers = new Headers({
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        });

        const response = await fetch(apiURL, { method: 'GET', mode: 'cors', headers: headers });

        if (response.status === 200) {
            const contactos = await response.json();
            const listaContactos = document.getElementById('lista-contactos');

            for (const contacto of contactos) {
                const listItem = document.createElement('li');
                listItem.textContent = `${contacto.id_contacto} ${contacto.nombre} ${contacto.primer_apellido} ${contacto.segundo_apellido} - Email: ${contacto.email} - Teléfono: ${contacto.telefono}`;
                listaContactos.appendChild(listItem);
            }
        } else {
            alert('Error al cargar la lista de contactos.');
        }
    } catch (error) {
        console.error('Error de red:', error);
        alert('Error de red al cargar la lista de contactos.');
    }
}

cargarContactos();
