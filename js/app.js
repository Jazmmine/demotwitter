window.addEventListener("load", function() {
    var btn = document.getElementById("publicar");
    var texto = document.getElementById("texto");
    btn.disabled = true;
    btn.addEventListener("click", function (e){
    	e.preventDefault();
    	var texto = document.getElementById("texto");
    	mensajes(texto.value);
 		texto.value = "";
 		document.getElementById("contador").value = 140;
        boton.disabled = true;
	});

		function mensajes (texto) {
    	var contenedorMensaje = document.createElement("div");
		contenedorMensaje.innerHTML = texto;
    	var mensajes = document.getElementById("mensaje");
    	mensajes.insertBefore(contenedorMensaje, mensaje.childNodes[0]).classList.add("cajaTweet");
		}
	texto.addEventListener("keypress", function (){
		btn.disabled = false;
		var caracteresMaximos = 140;
        var longitud = document.getElementById("texto").value.length;
        if(longitud <= caracteresMaximos) {
            document.getElementById("contador").value = caracteresMaximos - longitud;
        } else {
            document.getElementById("contador").value = caracteresMaximos - longitud;
        }
        if(longitud == 0) {
            boton.disabled = true;
        }
        if(longitud > caracteresMaximos) {
            boton.disabled = true;
        }

    });

});
