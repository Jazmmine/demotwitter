window.addEventListener("load", function() {
    var btn = document.getElementById("publicar");
    var texto = document.getElementById("texto");
    btn.disabled = true;
    btn.addEventListener("click", function (e){
    	e.preventDefault();
    	var texto = document.getElementById("texto");
    	mensajes(texto.value);
 		texto.value = "";
        btn.disabled = true;
	});

		function mensajes (texto) {
    	var contenedorMensaje = document.createElement("div");
		contenedorMensaje.innerHTML = texto;
    	var mensajes = document.getElementById("mensaje");
    	mensajes.insertBefore(contenedorMensaje, mensaje.childNodes[0]).classList.add("cajaTweet");
		}
	texto.addEventListener("keyup", function (){
		btn.disabled = false;
		var caracteresMaximos = 140;
        var contador = document.getElementById("contador");
        var longitud = document.getElementById("texto").value.length;

        if(longitud <= caracteresMaximos) {
            contador.value = caracteresMaximos - longitud;
        } 
        if (longitud == 0) {
            btn.disabled = true;
        }
        if (longitud >= caracteresMaximos) {
            contador.value = caracteresMaximos - longitud;
            btn.disabled = true;
        }
        if (longitud >= 0 && longitud < 120) {
            contador.classList.add("colorNegro");
            contador.classList.remove("colorMarron");
            contador.classList.remove("colorVerde");
        }
        if (longitud >= 120 && longitud < 130) {
            contador.classList.add("colorMarron");
            contador.classList.remove("colorNegro");
            contador.classList.remove("colorVerde");
        }

        if (longitud >= 130 && longitud < caracteresMaximos) {
            contador.classList.add("colorVerde");
            contador.classList.remove("colorMarron");
            contador.classList.remove("colorNegro");
        }    
    });

    texto.addEventListener("keypress", function(e){
        if (e.which == 13 || e.keyCode == 13) {
            var tamanioContenido = texto.scrollHeight;
            texto.style.height = tamanioContenido + 22 + "px";
            console.log(texto.style.height);
        }

    });


});
