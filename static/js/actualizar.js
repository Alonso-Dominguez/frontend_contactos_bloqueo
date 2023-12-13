async function actualizarContacto() {
    const apiURL = 'https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/contactos';
    // Obtén el token desde donde lo tengas almacenado
    const token = localStorage.getItem('token');

    try {
        const email = document.getElementById('actualizar-id').value;
        const nuevoNombre = document.getElementById('actualizar-nombre').value;
        const nuevoApellido_paterno = document.getElementById('actualizar-apellido-paterno').value;
        const nuevoApellido_materno = document.getElementById('actualizar-apellido-materno').value;
        const nuevoEmail = document.getElementById('actualizar-email').value;
        const nuevoTelefono = document.getElementById('actualizar-telefono').value;

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        const data = {
            nombre: nuevoNombre,
            primer_apellido: nuevoApellido_paterno,
            segundo_apellido: nuevoApellido_materno,
            email: nuevoEmail,
            telefono: nuevoTelefono,
        };

        // Actualiza la URL para incluir el ID en lugar del email
        const response = await axios.put(`${apiURL}/${email}`, data, { headers });

        if (response.status === 200) {
            alert('Contacto actualizado correctamente.');
            document.location.reload();
        } else {
            alert(`Error al actualizar el contacto: ${response.data.detail}`);
        }
    } catch (error) {
        console.error('Error inesperado:', error);
        alert('Error inesperado al actualizar el contacto.');
    }
}

// Actualizar el formulario cuando se presiona "Enter"
document.getElementById('updateContactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    actualizarContacto();
});
