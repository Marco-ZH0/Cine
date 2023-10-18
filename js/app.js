if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('Cine/sw.js')
      .then(function(registration) {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(function(error) {
        console.log('Error al registrar el Service Worker:', error);
      });
  }
  
  function ordenar(){
    mostrarTabla();
    var nombre;
    var correo;
    var pelicula;
    var imagen;
    var boletos;
    var total;

    tn = document.getElementById('tn').value;

    nombre = document.getElementById('nombre').value;
    correo = document.getElementById('correo').value;
    pelicula = document.getElementById('pelicula').value;
    imagen = document.getElementById('imagen').value;
    boletos = document.getElementById('boletos').value;
    total = parseFloat(boletos) * 50;

    document.getElementById('tn').innerHTML = nombre;
    document.getElementById('tc').innerHTML = correo;
    document.getElementById('tp').innerHTML = pelicula;
    if(pelicula==''){
        document.getElementById('tpo').innerHTML = `<input type="image" src="img/1.jpg" width="5px"  id="imagen">`;
    }
    if(pelicula=='Saw X'){
        document.getElementById('tpo').innerHTML = `<input type="image" src="img/2.jpg" width="5px"  id="imagen">`;
    }
    else if(pelicula=='La monja'){
        document.getElementById('tpo').innerHTML = `<input type="image" src="img/3.jpg" width = '100px' id="imagen">`;
    }
    else if(pelicula=='Chucky'){
        document.getElementById('tpo').innerHTML = `<input type="image" src="img/4.jpg" width = '100px' id="imagen">`;
    }
    else if(pelicula=='El conjuro'){
        document.getElementById('tpo').innerHTML = `<input type="image" src="img/5.jpg" width = '100px' id="imagen">`;
    }
    else if(pelicula=='Insidius'){
        document.getElementById('tpo').innerHTML = `<input type="image" src="img/6.jpg" width = '100px' id="imagen">`;
    }
    
    document.getElementById('tnu').innerHTML = boletos;
    document.getElementById('tt').innerHTML = total;
    document.getElementById('top').innerHTML = `<button width="100px" onclick="mostrarTabla()"><i class="bi bi-pencil-fill"></class=></button></i>
    <button onclick="limpiar()"><i class="bi bi-file-earmark-x"></button></i>`;

    // document.getElementById('nombre').value = "";
    // document.getElementById('correo').value = "";
    // document.getElementById('pelicula').value = "";
    // document.getElementById('imagen').value=  "";

}

function actualizar(){
    let imagen = document.getElementById('imagen');
    if(pelicula == '1'){
        
        imagen.src = "img/1.jpg";
        imagen.style.width = '300px';
    }
}

function mostrarTabla() {
    var reg = document.getElementById("reg");
    var tabla = document.getElementById("tabla");
    
    if (reg.style.display !== "none") {
        // Si el input está visible, lo ocultamos y mostramos la tabla
        reg.style.display = "none";
        tabla.style.display = "block";
    } else {
        // Si el input está oculto, lo mostramos y ocultamos la tabla
        reg.style.display = "block";
        tabla.style.display = "none";
    }
}

function limpiar() {
    mostrarTabla();
    nombre.value = "";
    correo.value = "";
    imagen.value = `<input type="image" src="img/1.jpg" width = '100px' id="imagen">`;
    pelicula.value = "";
    boletos.value = "";
    total.value = "";
    
}


    // var select = document.getElementById('pelicula').value;
    // var imagen = document.getElementById('imagen').value;
    const nombrePeliculas = document.getElementById("pelicula");
    const imagen = document.getElementById("imagen");
    
    nombrePeliculas.addEventListener(
        "change",
        function () {
          switch (this.value) {
            case "Saw X":
                imagen.src = "img/2.jpg";
              break;
            case "La monja":
                imagen.src = "img/3.jpg";
              break;
            case "Chucky":
                imagen.src = "img/4.jpg";
              break;
            case "El conjuro":
                imagen.src = "img/5.jpg";
              break;
            case "Insidius":
                imagen.src = "img/6.jpg";
              break;
            default:
                imagen.src = "img/1.webp";
              break;
          }
        },
        false
      );
