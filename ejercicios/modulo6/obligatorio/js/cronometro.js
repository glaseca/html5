$(function(){ 
	var t, tiempo_parada, cl = $("#crono"), paradas = $("#paradas"), error = $("#mensaje_error");
	var body = $('body');
	
	localStorage.paradas = (localStorage.paradas || "0.00");
	
	cl.html(localStorage.paradas.substring(localStorage.paradas.length-4,localStorage.paradas.length));
	paradas.html(localStorage.paradas);	
	
	body.tap(function(){
		cambiar();
	});
	body.swipe(function(){ 
		if(t===undefined){
			cl.html("0.00");
			paradas.html("");
			localStorage.paradas = "0.00";
		}else{
			error.show();
		}
	});
	
	error.hide();
	
	function mostrar()  {
		cl.html((+cl.html() + 0.01).toFixed(2));
	};
	function arrancar() {
		t=setInterval(mostrar, 10);
	};
	function parar()    {
		clearInterval(t);
		t=undefined;
	};
	function cambiar()  {
		if (!t){
			arrancar();				
		}else{
			parar();
			error.hide();
			tiempo_parada = cl.html();
			paradas.append('<br />'+tiempo_parada);
			localStorage.paradas += '<br />'+tiempo_parada;
		};
	}		
});