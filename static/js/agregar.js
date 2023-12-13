async function agregarContacto() {
    const apiURL = 'https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/contactos';

    // Obtén el token desde donde lo tengas almacenado
    const token = localStorage.getItem('token');

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

agregarContacto();
