async function cargarContactos() {
    const apiURL = 'https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/contactos';

    try {
        const response = await fetch(apiURL, { method: 'GET', mode: 'cors' });

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
