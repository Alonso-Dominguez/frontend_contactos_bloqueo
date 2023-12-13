// Verificar si el token está presente en el sessionStorage
const token = sessionStorage.getItem('token');
if (!token) {
    // Si no hay token, redirige al usuario a la página de inicio de sesión
    window.location.href = "/";
}

async function agregarContacto() {
    const apiURL = 'https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/contactos';

    // Obtén el token desde donde lo tengas almacenado
    const token = sessionStorage.getItem('token');

    try {
        const nombre = document.getElementById('nombre').value;
        const primer_apellido = document.getElementById('primer_apellido').value;
        const segundo_apellido = document.getElementById('segundo_apellido').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;

        const headers = new Headers({
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        });

        const response = await fetch(apiURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                nombre: nombre,
                primer_apellido: primer_apellido,
                segundo_apellido: segundo_apellido,
                email: email,
                telefono: telefono,
            }),
        });

        if (response.ok) {
            alert('Contacto agregado correctamente.');
            document.location.reload();
        } else {
            const errorData = await response.json();
            alert(`Error al agregar el contacto: ${errorData.detail}`);
        }
    } catch (error) {
        console.error('Error inesperado:', error);
        alert('Error inesperado al agregar el contacto.');
    }
}

async function buscarContactos() {
    const apiURL = 'https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/contactos/buscar';

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

async function actualizarContacto() {
    const apiURL = 'https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/contactos';

    // Obtén el token desde donde lo tengas almacenado
    const token = localStorage.getItem('token');

    try {
        const id = document.getElementById('actualizar-id').value;
        const nuevoNombre = document.getElementById('actualizar-nombre').value;
        const nuevoApellido_paterno = document.getElementById('actualizar-apellido-paterno').value;
        const nuevoApellido_materno = document.getElementById('actualizar-apellido-materno').value;
        const nuevoEmail = document.getElementById('actualizar-email').value;
        const nuevoTelefono = document.getElementById('actualizar-telefono').value;

        const headers = new Headers({
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        });

        const response = await fetch(`${apiURL}/${id}`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({
                nombre: nuevoNombre,
                primer_apellido: nuevoApellido_paterno,
                segundo_apellido: nuevoApellido_materno,
                email: nuevoEmail,
                telefono: nuevoTelefono,
            }),
        });

        if (response.ok) {
            alert('Contacto actualizado correctamente.');
            document.location.reload();
        } else {
            const errorData = await response.json();
            alert(`Error al actualizar el contacto: ${errorData.detail}`);
        }
    } catch (error) {
        console.error('Error inesperado:', error);
        alert('Error inesperado al actualizar el contacto.');
    }
}

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

async function cargarContactos() {
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
            const listaContactos = document.getElementById('lista-contactos');

            for (const contacto of contactos) {
                const listItem = document.createElement('li');
                listItem.textContent = `${contacto.id_contacto} ${contacto.nombre} ${contacto.primer_apellido} ${contacto.segundo_apellido} - Email: ${contacto.email} - Teléfono: ${contacto.telefono}`;
                listaContactos.appendChild(listItem);
            }
        } else {
            const errorData = await response.json();
            alert(`Error al cargar la lista de contactos: ${errorData.detail}`);
        }
    } catch (error) {
        console.error('Error inesperado:', error);
        alert('Error inesperado al cargar la lista de contactos.');
    }
}

cargarContactos();
