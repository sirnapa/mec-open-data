Mec.Router.map(function () {
	this.resource('aviso-legal');
	this.resource('acerca-de');
	this.resource('datos',function(){
		this.route('ver');
		this.route('catalogo');
		this.route('diccionario');
		this.route('mapa');
	});
	this.resource('visualizaciones');
	this.resource('participa');
	this.resource('participa2');
	this.resource('uri',function(){
		this.route('establecimiento');
		this.route('institucion');
		this.route('nomina');
	});
});
