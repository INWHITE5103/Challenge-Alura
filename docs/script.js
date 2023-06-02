/*Texto Encriptado */
/* fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y 
haibenterrlober cobernclufatimesdober cobern enterximestober! */

/* Texto Desencriptado */
/* felicidades por enfrentar este desafio y haberlo concluido con exito! */

//Textos
let txtOriginal = document.getElementById("texto");
let txtSalida = document.getElementById("textoMensaje");

//Botones
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");

document.getElementById("hidden-output").style.display = "none";

function ocultarMuro() {
  document.getElementById("hidden-output").style.display = "block";
  document.getElementById("displayed-output").style.display = "none";
}

function ensenharMuro() {
  document.getElementById("displayed-output").style.display = "block";
  document.getElementById("hidden-output").style.display = "none";
}

function EncriptarTxt() {
  txtEncriptado = txtOriginal.value
    .toLowerCase()
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/ufat/g, "u");

  txtSalida.innerHTML = txtEncriptado;
  ocultarMuro();
}

function DesencriptarTxt() {
  txtDesencriptado = txtOriginal.value
    .toLowerCase()
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  txtSalida.innerHTML = txtDesencriptado;
  ocultarMuro();
}

btnCopiar.addEventListener("click", async () => {
  await navigator.clipboard.writeText(txtSalida.value);
  txtOriginal.value = "";
  ensenharMuro();
});

btnEncriptar.addEventListener("click", EncriptarTxt);
btnDesencriptar.addEventListener("click", DesencriptarTxt);
