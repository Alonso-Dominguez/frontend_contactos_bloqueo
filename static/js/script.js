async function agregarContacto() {
    try {
        const nombre = document.getElementById('nombre').value;
        const primer_apellido = document.getElementById('primer_apellido').value;
        const segundo_apellido = document.getElementById('segundo_apellido').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;

        const response = await fetch('https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/contactos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
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
    try {
        const email = document.getElementById('email').value;

        const response = await fetch(`https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/contactos/buscar?email=${email}`);

        if (response.ok) {
            const contactos = await response.json();
            const resultadoBusqueda = document.getElementById('resultado-busqueda');
            resultadoBusqueda.innerHTML = '';

            for (const contacto of contactos) {
                const listItem = document.createElement('li');
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
    try {
        const id = document.getElementById('actualizar-id').value;
        const nuevoNombre = document.getElementById('actualizar-nombre').value;
        const nuevoApellido_paterno = document.getElementById('actualizar-apellido-paterno').value;
        const nuevoApellido_materno = document.getElementById('actualizar-apellido-materno').value;
        const nuevoEmail = document.getElementById('actualizar-email').value;
        const nuevoTelefono = document.getElementById('actualizar-telefono').value;

        const response = await fetch(`https://backend-contactos-jadc-b1444a39f4f7.herokuapp.com/contactos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
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
    try {
        const id = document.getElementById('borrar-id').value;
        const response = await fetch(`https://backend-contactos-jadc-b1444a39f4f7.herokuapp.com/contactos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
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
    try {
        const response = await fetch('https://backend-contactos-jadc-b1444a39f4f7.herokuapp.com/contactos');
    
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
