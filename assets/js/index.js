/* js imagen con borde*/
var tieneBorde = false;

function bordeRojo() {
    var bordeRed = document.getElementById("bordeRed");


    if (tieneBorde) {
        bordeRed.style.border = "none";
        tieneBorde = false;
    } else {
        bordeRed.style.border = "solid 2px red";
        tieneBorde = true;

    }
}

/*js sticker*/
function calcularStickers() {
    var sticker1 = parseInt(document.getElementById("sticker1").value);
    var sticker2 = parseInt(document.getElementById("sticker2").value);
    var sticker3 = parseInt(document.getElementById("sticker3").value);

    var totalStickers = sticker1 + sticker2 + sticker3;

    if (totalStickers <= 10) {
        document.getElementById("resultado").innerText = "Llevas " + totalStickers + " stickers.";
    } else {
        document.getElementById("resultado").innerText = "Llevas demasiados stickers.";
    }
}

/*js contraseña*/
function verificarPassword() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var password3 = document.getElementById("password3").value;

    if (password1 === "9" && password2 === "1" && password3 === "1") {
        document.getElementById("resultadoFinal").innerText = "Password 1 correcto";
    } else if (password1 === "7" && password2 === "1" && password3 === "4") {
        document.getElementById("resultadoFinal").innerText = "Password 2 correcto";
    } else {
        document.getElementById("resultadoFinal").innerText = "Password incorrecto";
    }
}

