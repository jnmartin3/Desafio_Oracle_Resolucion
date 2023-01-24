/*ARchivo con el codigo que procese y encripte desencripte el mensaje */

/*usamos el DOM para capturar lo que se ingresa
capturando primero lo que primero se ingresa en el codigo HTML
Atento a l punto inicial para las clases y # para los id*/

/*Aqui leo y asigno a variables, primero lo del cuadro de texto de la izquierda y luego el de la derecha*/

const textArea = document.querySelector(".text-area");

const mensaje = document.querySelector(".mensaje");

/*Funcion que recibe el evento del boton de encriptar, captura el texto del primer textArea
lo envia a la funcion encriptar() e imprime en el segundo textArea la solucion */

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = ""; //Limpia el textArea de la izquierda luego de ingresado el texto a encriptar
    mensaje.style.backgroundImage = "none"; //desaparece la imagen cada vez que se usa el encriptador
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = ""; //Limpia el textArea de la izquierda luego de ingresado el texto a encriptar
    mensaje.style.backgroundImage = "none"; //desaparece la imagen cada vez que se usa el encriptador
}

function btnCopiar() {
    const textoCopiado = mensaje.value;
    textArea.value = textoCopiado;
    //mensaje.value = "";


}

function encriptar(stringEncriptada) {

    /*Almacenaremos las claves de encriptacion en un arreglo multidimensional */
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];

    stringEncriptada = stringEncriptada.toLowerCase();

    /*Bucle para recorrer la matriz,
    busca para cada elemento de la matriz, si esta presente el primer elemento de la submatriz 
    o sea, las letras*/

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            /*Aqui reemplaza cada letra por su encriptado */
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {

    stringDesencriptada = stringDesencriptada;

    let matrizCodigoD = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];

    for (let j = 0; j < matrizCodigoD.length; j++) {
        if (stringDesencriptada.includes(matrizCodigoD[j][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigoD[j][1], matrizCodigoD[j][0]);
        }
    }

    return stringDesencriptada;
}

