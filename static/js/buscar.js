async function buscarContactos() {
    try {
        const email = document.getElementById('email').value;

        const response = await fetch(`https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/contactos/buscar?email=${email}`);

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
