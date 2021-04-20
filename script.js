var teste = new Audio();
teste.src = 'click.mp3';

var button = document.querySelectorAll(".button");
var operationButton = document.querySelectorAll(".operation");
var screen = document.form.txt;
var resultado;
var valor;
var block = false;
var array = [];
var signal = false;

button.forEach(function (button) {
    button.addEventListener("click", function (event) {
        console.log(signal)
        array = screen.value
        display();




    })
})

function display(number) {
    var number = event.target.value;
    if (signal == false) {
        if (number == "+" || number == "*" || number == "/") {
            number = "";
        }
    }
    if (number == '+' || number == '-' || number == '*' || number == '/') {
        block = true;
    } else {

        block = false;
    }

    if (array[array.length - 1] == '+' && block == true) {
        number = "";
    }
    if (array[array.length - 1] == '-' && block == true) {
        number = "";
    }
    if (array[array.length - 1] == '*' && block == true) {
        number = "";
    }
    if (array[array.length - 1] == '/' && block == true) {
        number = "";
    }
    if (screen.value.length >= 12) {
        alert("Tamanho excedido!")
        valor = screen.value = ""
    } else {
        valor = screen.value;
        valor = screen.value = screen.value + number;
        if (valor >= 9 || valor < 0) {
            signal = true;
        }
    }
}

operation.forEach(function (operation) {
    operation.addEventListener("click", function (event) {
        deleteC();
    })
})
function deleteC() {
    var number = event.target.value;
    if (number == 'C') {
        valor = screen.value = "";
        signal = false
    }
}

//Delete one by one
operation.forEach(function (operation) {
    operation.addEventListener("click", function (event) {
        deletee();
    })
})
function deletee() {
    screen.value;
    screen.value = screen.value.substring(0, screen.value.length - 1);
}
//Operation for making a account
operation.forEach(function (operation) {
    operation.addEventListener("click", function (event) {
        conta();
    })
})
function conta() {
    resultado = eval(valor);
    if (valor) {
        screen.value = resultado;
    } else {
        screen.value = "Erro";
    }
}