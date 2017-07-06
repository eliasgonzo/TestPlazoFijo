var buttonCotizar = document.getElementById("cotizarPlazo");
var seleccionPlazo = document.getElementById("banco");
var blockResultadoPlazoFijo = document.getElementById("resultadoPlazoFijo");

buttonCotizar.onclick = function(){

var montoInversion = document.getElementById("importe").value;

if( montoInversion == null || montoInversion == undefined || montoInversion == false ){
		
	document.getElementById("importe").className = "invalid";
	
}else{
	document.getElementById("importe").className = "valid";

for( var i in plazoFijo ){
	
	
	if( seleccionPlazo.value == plazoFijo[i]['banco'] ){
	
		var mostrarBanco = document.getElementById("resultadoBanco");
			mostrarBanco.innerHTML = "Banco: " + plazoFijo[i]["banco"];	

		var mostrarTaza = document.getElementById("resultadoTaza");
			mostrarTaza.innerHTML = "Taza: " + plazoFijo[i]["taza"]*100 + "%";	
			
		/* plazo fijo = ( monto*interes ) */

        var arrayTaza = plazoFijo[i]["taza"];		
		
		var interezBanco = ( montoInversion * arrayTaza );
		
		var totalPlazoFito = parseInt(montoInversion) + parseInt(interezBanco);
		
        var mostrarInversion = document.getElementById("inversion");
			mostrarInversion.innerHTML = "Capital invertido: " + montoInversion;
		
		var resultadoIntereses = document.getElementById("resultadoInteresesGanados");	
			resultadoIntereses.innerHTML = "Intereses: $" + interezBanco;
		
		var resultadoTotalPlFj = document.getElementById("resultadoTotal");
		
		resultadoTotalPlFj.innerHTML = "Total: $" + totalPlazoFito;

		blockResultadoPlazoFijo.className = "contentResultado open";
		
	}

}
}
}	