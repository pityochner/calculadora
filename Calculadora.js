class Calculadora {
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }

    dividir(num1, num2) {
        num1 == 0 && swal({title: "ERROR", text: "No se pueden dividir numeros por 0", icon: "error", button: "OKAY",});
        num2 == 0 && swal({title: "ERROR", text: "No se pueden dividir numeros por 0", icon: "error", button: "OKAY",});
        return num1 / num2;
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }
} 