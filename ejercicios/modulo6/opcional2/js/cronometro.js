$(function(){ 
	var t, tiempo_parada, cl = $("#crono"), paradas = $("#paradas"), error = $("#mensaje_error");
	var body = $('body');
	
	body.tap(function(){
		cambiar();
	});
	body.swipe(function(){ 
		if(t===undefined){
			cl.html("0.00");
			paradas.html("");
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
		};
	}		
});