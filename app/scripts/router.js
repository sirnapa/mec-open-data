Mec.Router.map(function () {
	this.resource('aviso-legal');
	this.resource('acerca-de');
	this.resource('datos',function(){
		this.route('ver');
		this.route('diccionario');
		this.route('mapa');
	});
	this.resource('visualizaciones');
});
