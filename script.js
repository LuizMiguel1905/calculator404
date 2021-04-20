var teste = new Audio();
teste.src = 'click.mp3';


/*var n1 = 0;
function deletar() {
    document.form.txt.value = "";
    document.form.txt.value = 0;
}

function plus() {
    n1 = document.form.txt.value;
    console.log(n1);
}
function limpar() {
    document.getElementById('resultado').innerHTML = " ";
}
function apagar() {
    var voltar = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = voltar.substring(0, voltar.length - 1);
}
function calcular() {
    var calcula = document.getElementById('resultado').innerHTML;
    if (calcula) {
        document.getElementById('resultado').innerHTML = eval(calcula);
    }
    else {
        document.getElementById('resultado').innerHTML = "Erro";
    }
}
*/
var button = document.querySelectorAll(".button");
var operationButton = document.querySelectorAll(".operation");
var screen = document.form.txt;
var resultado;
var valor;
var block = false;
var array = [];
button.forEach(function (button) {
    button.addEventListener("click", function (event) {
        display();
        array = screen.value
        console.log(array[array.length - 1])
        console.log(screen.value.length)

    })
})

function display(number) {
    var number = event.target.value;
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
        contador = 0;
    }
}

//apagar de um por um 
operation.forEach(function (operation) {
    operation.addEventListener("click", function (event) {
        deletee();
    })
})
function deletee() {
    screen.value;
    screen.value = screen.value.substring(0, screen.value.length - 1);
}
//operação para fazer as contas 
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