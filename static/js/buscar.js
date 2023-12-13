async function buscarContactos() {
    const apiURL = 'https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/contactos';

    // Obtén el token desde donde lo tengas almacenado
    const token = localStorage.getItem('token');

    try {
        const email = document.getElementById('email').value;

        const headers = new Headers({
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        });

        const response = await fetch(`${apiURL}?email=${email}`, {
            method: 'GET',
            headers: headers,
        });

        if (response.ok) {
            const contactos = await response.json();
            const resultadoBusqueda = document.getElementById('resultado-busqueda');
            resultadoBusqueda.innerHTML = '';

            for (const contacto of contactos) {
                const listItem = document.createElement('li');
                listItem.classList.add('list-group-item');
                listItem.textContent = `${contacto.nombre} ${contacto.primer_apellido} ${contacto.segundo_apellido} - Email: ${contacto.email} - Teléfono: ${contacto.telefono}`;
                resultadoBusqueda.appendChild(listItem);
            }
        } else {
            const errorData = await response.json();
            alert(`Error al buscar contactos: ${errorData.detail}`);
        }
    } catch (error) {
        console.error('Error inesperado:', error);
        alert('Error inesperado al buscar contactos.');
    }
}

buscarContactos();
