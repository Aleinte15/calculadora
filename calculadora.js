let num1 = "";
let operacion = "";
let num2 = "";
let listanumero = "";
let resultado = 0;
let caracteres = /[+\-*\/]/;

function agregarNumero(valor) {
    var input = document.getElementById("display");
    var inputValue = input.value;
    console.log(inputValue);

    if (valor == "+" || valor == "-" || valor == "/" || valor == "*") {
        operacion = valor
        if (inputValue > 0) {
            if (!inputValue.match(caracteres)) {
                inputValue = inputValue + valor;
                input.value = inputValue;
            }
        }
    } else {
        inputValue = inputValue + valor;
        input.value = inputValue;
    }



}
function escucharNumero(event) {
    console.log("Tecla presionada: " + event.key);
    var input = event.key
    var inputValue = input.value;

    const validar = /^[0-9+*/()-]*$/;
    if (validar.test(event.key)) {
        var pantalla = document.getElementById("display").value;
        console.log(pantalla);

        if (event.key == "+" || event.key == "-" || event.key == "/" || event.key == "*") {
            operacion = event.key
            if (pantalla > 0) {
                if (!inputValue.match(caracteres)) {
                    inputValue = inputValue + event.key;
                    input.value = inputValue;
                    return true;
                }

            }
        } else {
            inputValue = inputValue + event.key;
            input.value = inputValue;
            return true;
        }
    }

    return false;

}

function limpiar() {
    document.getElementById("display").value = "";
}


function resultadoOperacion() {
    listanumero = document.getElementById("display").value;
    var separador = listanumero.split(operacion);
    num1 = separador[0];
    num2 = separador[1];
    if (num1 > 0 && num2 >= 0) {
        var input = document.getElementById("display");
        var inputValue = input.value;
        if (operacion == "+") {
            inputValue = Number(num1) + Number(num2);
            input.value = inputValue;
        } else if (operacion == "-") {
            inputValue = Number(num1) - Number(num2);
            input.value = inputValue;
        }
        else if (operacion == "/") {
            inputValue = Number(num1) / Number(num2);
            input.value = inputValue;
        }
        else if (operacion == "*") {
            inputValue = Number(num1) * Number(num2);
            input.value = inputValue;
        }
    }


}







