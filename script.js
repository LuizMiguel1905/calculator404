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
button.forEach(function (button) {
    button.addEventListener("click", function (event) {
        display();
    })
})

function display() {
    if (document.form.txt.value == 0) {
        document.form.txt.value = "";
        document.form.txt.value = document.form.txt.value + event.target.value
    } else {
        document.form.txt.value = document.form.txt.value + event.target.value
    }
}

