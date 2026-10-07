const boton = document.getElementById("btn_color");
let cambiado = false;
boton.addEventListener("click", function() {
    const divs = document.querySelectorAll(".contenedor div");
    if (cambiado == false) {
        divs.forEach(function(div) {
            div.style.backgroundColor = "black";
            div.style.color = "white";
        });
        cambiado = true;
    } else {
        divs[0].style.backgroundColor = "lightblue";
        divs[1].style.backgroundColor = "lightgreen";
        divs[2].style.backgroundColor = "lightcoral";
        divs[3].style.backgroundColor = "lightyellow";
        divs[4].style.backgroundColor = "plum";
        divs[5].style.backgroundColor = "lightsalmon";
        divs[6].style.backgroundColor = "lightcyan";
        divs[7].style.backgroundColor = "lightpink";
        divs.forEach(function(div) {
            div.style.color = "black";
        });
        cambiado = false;
    }
});