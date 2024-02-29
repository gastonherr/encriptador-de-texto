function encriptar(){
    let textoIngresado = document.getElementById("input").value.toLowerCase();

    let textoEncriptado = textoIngresado.replace(/e/img, "enter")
    .replace(/o/img, "ober")
    .replace(/i/img, "imes")
    .replace(/a/img, "ai")
    .replace(/u/img, "ufat");

    document.getElementById("resultado").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "inherit";

}

function desencriptar(){
    let textoIngresado = document.getElementById("input").value.toLowerCase();

    let textoDesencriptado = textoIngresado.replace(/enter/img, "e")
    .replace(/ai/img, "a")
    .replace(/imes/img, "i")
    .replace(/ober/img, "o")
    .replace(/ufat/img, "u");

   document.getElementById("resultado").innerHTML = textoDesencriptado;
}

function copiar(){
    let textoACopiar = document.querySelector("#resultado");
    textoACopiar.select();
    document.execCommand("copy");
}
























/*function encriptar(mensajeEnc) {
    let reemplazos = [["i", "imes"], ["a", "ai"], ["e", "enter"], ["o", "ober"], ["u", "ufat"]];
        for (let i = 0; i < reemplazos.length; i++){
            if(mensajeEnc.includes(reemplazos [i][0])) {
                mensajeEnc.replaceAll(reemplazos[i][0], reemplazos[i][1]);
            }
    
}
return mensajeEnc;
}
*/






