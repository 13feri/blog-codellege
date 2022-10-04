let link = document.getElementById("link");

document.querySelector("#boton").addEventListener('click',fconfirmacion)
function fconfirmacion(){
    let confirmacionBloque = document.querySelector("form");

    confirmacionBloque.innerHTML = `Creando Usuario`;
    setTimeout(function(){ window.location.href=link}, 2000);

  }