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

button.forEach(function (button) {
    button.addEventListener("click", function (event) {
        display();
    })
})

function display() {
    var number = event.target.value;
    if (number == 'C') {
        screen.value = "";
        screen.value = 0;
    }
    else if (0 <= number || number <= 9 || number == '.') {
        if (screen.value == 0) {
            screen.value = "";
            screen.value = screen.value + number;
        } else {
            screen.value = screen.value + number;
        }
    }
}