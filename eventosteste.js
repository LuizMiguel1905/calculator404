//<h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>

//-----------------------------------------------------------------------------

/*<h1 onclick="changeText(this)">Click on this text!</h1>

<script>
function changeText(id) {
  id.innerHTML = "Ooops!";
}
</script>*/

//------------------------------------------------------------------------------

/*
<p>Click the button to display the date.</p>

<button onclick="displayDate()">The time is?</button>

<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>

<p id="demo"></p>
*/

//-----------------------------------------------------------------------------

// id="sept" onmousedown="seven()"

//-----------------------------------------------------------------------------

/* function inserir(num){
     var numero = document.getElementById('resultado').innerHTML;
     document.getElementById('resultado').innerHTML = (numero + num); 
    }
    function limpar(){
        document.getElementById('resultado').innerHTML = " "; 
    }
    function apagar(){
       var voltar = document.getElementById('resultado').innerHTML; 
       document.getElementById('resultado').innerHTML = voltar.substring(0, voltar.length -1); 
    }
    function calcular(){
        var calcula = document.getElementById('resultado').innerHTML; 
        if(calcula){
        document.getElementById('resultado').innerHTML = eval(calcula);
        }
        else{
            document.getElementById('resultado').innerHTML = "Erro"; 
        }
    }
    function porcentagem(){
        var p = document.getElementById('resultado').innerHTML; 
        document.getElementById('resultado').innerHTML = (p / 100); 

    }
onclick = "inserir('1')" - em cada botão */