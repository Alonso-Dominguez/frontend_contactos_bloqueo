function getAll(){
	var request = new XMLHttpRequest;
	request.open('GET',"https://backend-contactos-bloqueo-fb3d5fd89684.herokuapp.com/contactos");
	request.send();

	request.onload = (e) => {
		const response = request.responseText;
		const json = JSON.parse(response);
		console.log("response: " + response);
        console.log("json: " + json);
        console.log("status_code: " + request.status);

        console.log("Nombre: " + json[0]["nombre"]);
        console.log("Email: " + json[0]["primer_apellido"]);
        console.log("Email: " + json[0]["segundo_apellido"]);
        console.log("Email: " + json[0]["email"]);
        console.log("Telefono: " + json[0]["telefono"]);

        const tbody_contactos = document.getElementById("tybody_listar-contactos");

        var tr = document.createElement("tr")
		var td_email = document.createElement("td");
		var td_nombre = document.createElement("td");
		var td_telefono = document.createElement("td")

		td_nombre.innerHTML = json[0]["nombre"];
		td_primer_apellido.innerHTML = json[0]["primer_apellido"];
		td_segundo_apellido.innerHTML = json[0]["segundo_apellido"];
		td_telefono.innerHTML = json[0]["telefono"];
		td_email.innerHTML = json[0]["email"];
		
		tr.appendChild(td_nombre);
		tr.appendChild(td_primer_apellido);
		tr.appendChild(td_segundo_apellido);
		tr.appendChild(td_email);

		tbody_contactos.appendChild(tr);
				
	};
};