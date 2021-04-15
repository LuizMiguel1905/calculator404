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

button.forEach(function (button) {
    button.addEventListener("click", function (event) {
        display();
    })
})

function display(number) {
    var number = event.target.value;
    if (number == 'C') {
        valor = screen.value = "";
          valor = screen.value = 0;
    }
        if (screen.value == 0) {
             valor = screen.value = "";
          valor = screen.value = screen.value + number;
        } else {
           valor = screen.value = screen.value + number;
        }
    }
    operation.forEach(function (operation) {
        operation.addEventListener("click", function (event) {
            deleteC();
        })
    })
function deleteC(){
    var number = event.target.value;
    if (number == 'C') {
        valor = screen.value = "";
          valor = screen.value = 0;
    }
}

//apagar de um por um 
operation.forEach(function (operation) {
    operation.addEventListener("click", function (event) {
        deletee();
    })
})
function deletee(){
    screen.value; 
    screen.value = screen.value.substring(0, screen.value.length -1); 
}
//operação para fazer as contas 
operation.forEach(function (operation) {
    operation.addEventListener("click", function (event) {
        conta();
    })
})
function conta(){
    resultado = eval(valor);
    if(valor){
        screen.value = resultado; 
    }else{
        screen.value = "Erro"; 
    }
}
