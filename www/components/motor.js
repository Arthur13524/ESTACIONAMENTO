function calcularconsumo() {
    var subcompacto,  compacto, hatch, sedan,  suv, pick;

    placa = document.getElementById('placa').value
    hora = document.getElementById('hora').value
    categoria = document.getElementById('categoria').value

     if (hora > 3) {
        alert("O limite máximo de horas é 3.");
        return;

    }

 if(categoria == "subcompacto") {
     document.getElementById('nome').textContent = "R$" + hora * 3.50
 }
 else if(categoria == "compacto") {
     document.getElementById('nome').textContent = "R$" + hora * 4
 }
 else if(categoria == "hatch") {
     document.getElementById('nome').textContent = "R$" + hora * 4.50
 }
 else if(categoria == "sedan") {
     document.getElementById('nome').textContent = "R$" + hora * 5
 }
 else if(categoria == "suv") {
     document.getElementById('nome').textContent = "R$" + hora * 6
 }
 else if(categoria == "pick") {
     document.getElementById('nome').textContent = "R$" + hora * 7
 }
}

function novacompra() {
    document.getElementById('placa').value="";
    document.getElementById('categoria').value="cat";
    document.getElementById('hora').value="";
    document.getElementById('nome').innerHTML="";

    alert("Os dados foram limpos");
}