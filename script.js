var teste = new Audio();
teste.src = 'click.mp3';

var teste = new Audio();
teste.src = 'click.mp3'

var n1 = 0;
function display(num) {
    if (document.form.txt.value == 0) {
        document.form.txt.value = "";
        document.form.txt.value = document.form.txt.value + num
    } else {
        document.form.txt.value = document.form.txt.value + num
    }

}

function clear() {
    document.form.txt.value = "";
}

function plus() {
    n1 = document.form.txt.value;
    console.log(n1);
}

