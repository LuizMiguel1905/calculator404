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
var contador = 0;
button.forEach(function (button) {
    button.addEventListener("click", function (event) {
        contador++;
        display();

    })
})

function display(number) {
    var number = event.target.value;
    if (contador >= 12) {
        alert("Tamanho excedido!")
        valor = screen.value = ""
        contador = 0;
    } else {
        valor = screen.value;
        valor = screen.value = screen.value + number;
        if (contador == 1 && number == '*') {
            valor = screen.value = ""
            contador = 0;
        }
        else if (contador == 1 && number == '/') {
            valor = screen.value = ""
            contador = 0;
        }
        else if (contador == 1 && number == '+') {
            valor = screen.value = ""
            contador = 0;
        }
        else if (contador == 1 && number == '.') {
            valor = screen.value = ""
            contador = 0;
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