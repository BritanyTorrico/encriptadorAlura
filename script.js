const textArea= document.querySelector(".text-area");
const mensaje= document.querySelector(".mensaje");
const mensajeAdicional = document.querySelector(".mensaje-adicional");
const copiarBtn = document.querySelector('.btn-copiar');
const contenedorDerecha = document.querySelector('.output-section');
const contenedorIzquierda = document.querySelector('.contenedor-izquierda');
const mensajeValidacion = document.getElementById("mensaje-validacion");
function btnEncriptar() {
    if (validarTexto(textArea.value)) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        verificarTextArea();
        mensajeValidacion.style.display = "none"; 
    }else{
        mensajeValidacion.style.display = "flex";
    }
}
function btnDesencriptar() {
    if (validarTexto(textArea.value)) {
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        verificarTextArea();
        mensajeValidacion.style.display = "none"; 
    } else {
        mensajeValidacion.style.display = "flex"; 
    }
}

function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    if (!regex.test(texto)) {
        return false;
    }
    return true;
}

function encriptar(valor){
    let matriz = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    valor = valor.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        if (valor.includes(matriz[i][0])) {
            valor = valor.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return valor;
}

function desencriptar(valor){
    let matriz = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    valor = valor.toLowerCase();
    for (let i = 0; i < matriz.length; i++) {
        if (valor.includes(matriz[i][1])) {
            valor = valor.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    
    return valor;
}
function verificarTextArea() {
    if (mensaje.value.trim() === "") {
        mensajeAdicional.style.display = "block";
        mensaje.style.backgroundImage = 'url("./assets/Muneco.png")'; 
        copiarBtn.style.display = "none";

    } else {
        mensajeAdicional.style.display = "none";
        mensaje.style.backgroundImage="none";
        copiarBtn.style.display = "block"; 
        mensaje.style.display="block";
        mensaje.style.maxHeight="100%";
    }
}
function copiarAlPortapapeles() {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

// Verifica el text area inicialmente y cada vez que cambia su contenido
textArea.addEventListener("input", verificarTextArea);

// Ejecuta la verificación inicial al cargar la página
verificarTextArea();